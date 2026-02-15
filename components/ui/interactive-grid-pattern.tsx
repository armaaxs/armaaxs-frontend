"use client"

import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react"
import { cn } from "@/lib/utils"

export interface InteractiveGridPatternProps {
    className?: string
    children?: React.ReactNode
    /** Size of each grid cell in pixels */
    cellSize?: number
    /** Glow color on hover */
    glowColor?: string
    /** Border color of grid lines */
    borderColor?: string
    /** Mouse proximity radius for subtle highlighting */
    proximity?: number
}

interface TrailPoint {
    x: number
    y: number
    timestamp: number
}

// Memoized cell component to prevent unnecessary re-renders
const GridCell = memo(function GridCell({
    cellSize,
    proximityFactor,
    isHovered,
    isMoving,
    gridScale,
    borderColor,
    onMouseEnter,
    onMouseLeave,
}: {
    cellSize: number
    proximityFactor: number
    isHovered: boolean
    isMoving: boolean
    gridScale: number
    borderColor: string
    onMouseEnter: () => void
    onMouseLeave: () => void
}) {
    const activeHover = isHovered && isMoving

    return (
        <div
            className="shrink-0 border transition-all ease-out"
            style={{
                width: cellSize,
                height: cellSize,
                borderColor: proximityFactor > 0
                    ? `rgba(34, 211, 238, ${Math.max(0.05, proximityFactor * 0.4)})`
                    : borderColor,
                background: activeHover
                    ? `radial-gradient(circle, rgba(147, 51, 234, 0.9) 0%, rgba(34, 211, 238, 0.6) 100%)`
                    : proximityFactor > 0
                        ? `radial-gradient(circle, rgba(147, 51, 234, ${proximityFactor * 0.5}) 0%, rgba(34, 211, 238, ${proximityFactor * 0.3}) 100%)`
                        : "transparent",
                boxShadow: activeHover
                    ? `0 0 ${30 * gridScale}px rgba(147, 51, 234, 0.8), 0 0 ${60 * gridScale}px rgba(34, 211, 238, 0.5)`
                    : proximityFactor > 0.3
                        ? `0 0 ${15 * gridScale}px rgba(147, 51, 234, ${proximityFactor * 0.4})`
                        : "none",
                transitionDuration: isMoving ? "150ms" : "800ms",
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    )
})

export function InteractiveGridPattern({
    className,
    children,
    cellSize = 50,
    glowColor = "rgba(34, 211, 238, 0.4)",
    borderColor = "rgba(63, 63, 70, 0.4)",
    proximity = 100,
}: InteractiveGridPatternProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [grid, setGrid] = useState({ rows: 0, cols: 0, scale: 1 })
    const [hoveredCell, setHoveredCell] = useState<number | null>(null)
    const mousePosRef = useRef({ x: -1000, y: -1000 })
    const trailRef = useRef<TrailPoint[]>([])
    const isMovingRef = useRef(false)
    const glowIntensityRef = useRef(0)
    const idleTimerRef = useRef<NodeJS.Timeout | null>(null)
    const rafRef = useRef<number | null>(null)

    // Force update trigger for animation frames
    const [renderKey, forceUpdate] = useState(0)
    const isMoving = isMovingRef.current

    const updateGrid = useCallback(() => {
        const container = containerRef.current
        if (!container) return

        const { width, height } = container.getBoundingClientRect()
        const scale = Math.max(1, Math.min(width, height) / 800)
        const scaledCellSize = cellSize * scale

        const cols = Math.ceil(width / scaledCellSize) + 1
        const rows = Math.ceil(height / scaledCellSize) + 1

        setGrid({ rows, cols, scale })
    }, [cellSize])

    useEffect(() => {
        updateGrid()
        const container = containerRef.current
        if (!container) return

        const ro = new ResizeObserver(updateGrid)
        ro.observe(container)
        return () => ro.disconnect()
    }, [updateGrid])

    // Main animation loop - handles trail fading and glow intensity
    useEffect(() => {
        let lastTime = performance.now()

        const animate = (currentTime: number) => {
            const deltaTime = currentTime - lastTime

            // Only update at ~30fps for performance
            if (deltaTime >= 33) {
                lastTime = currentTime
                const now = Date.now()

                // Clean up old trail points (2 second max age)
                trailRef.current = trailRef.current.filter(
                    point => now - point.timestamp < 2000
                )

                // Update glow intensity with smooth easing
                if (isMovingRef.current) {
                    const target = 1
                    const diff = target - glowIntensityRef.current
                    glowIntensityRef.current += diff * 0.08
                    if (Math.abs(diff) < 0.01) glowIntensityRef.current = target
                } else {
                    glowIntensityRef.current *= 0.985
                    if (glowIntensityRef.current < 0.01) glowIntensityRef.current = 0
                }

                // Only trigger re-render if there's visible glow
                if (glowIntensityRef.current > 0.01 || trailRef.current.length > 0) {
                    forceUpdate(n => n + 1)
                }
            }

            rafRef.current = requestAnimationFrame(animate)
        }

        rafRef.current = requestAnimationFrame(animate)
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [])

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const container = containerRef.current
        if (!container) return
        const rect = container.getBoundingClientRect()
        const now = Date.now()
        const newPos = { x: e.clientX - rect.left, y: e.clientY - rect.top }

        mousePosRef.current = newPos
        isMovingRef.current = true

        // Add to trail (limit trail size for performance)
        trailRef.current.push({ ...newPos, timestamp: now })
        if (trailRef.current.length > 30) {
            trailRef.current = trailRef.current.slice(-20)
        }

        // Reset idle timer
        if (idleTimerRef.current) {
            clearTimeout(idleTimerRef.current)
        }
        idleTimerRef.current = setTimeout(() => {
            isMovingRef.current = false
        }, 150)
    }, [])

    const handleMouseLeave = useCallback(() => {
        mousePosRef.current = { x: -1000, y: -1000 }
        setHoveredCell(null)
        isMovingRef.current = false
        if (idleTimerRef.current) {
            clearTimeout(idleTimerRef.current)
        }
    }, [])

    const scaledCellSize = cellSize * grid.scale
    const scaledProximity = proximity * grid.scale

    // Calculate proximity factor including trail effect
    const getProximityFactor = useCallback((cellX: number, cellY: number) => {
        const now = Date.now()
        const mousePos = mousePosRef.current
        const trail = trailRef.current
        const glowIntensity = glowIntensityRef.current

        // Balanced radius for spotlight
        const spotlightRadius = scaledProximity * 0.8

        let maxFactor = 0

        // Current mouse position (strongest when moving)
        const dx = mousePos.x - cellX
        const dy = mousePos.y - cellY
        const currentDistance = Math.sqrt(dx * dx + dy * dy)
        // Apply quadratic falloff for smooth circular spotlight
        const linearFactor = Math.max(0, 1 - currentDistance / spotlightRadius)
        const currentFactor = linearFactor * linearFactor * glowIntensity
        maxFactor = Math.max(maxFactor, currentFactor)

        // Sample trail positions (skip some for performance)
        for (let i = 0; i < trail.length; i += 2) {
            const point = trail[i]
            const age = now - point.timestamp
            const maxAge = 2000
            const ageFactor = Math.max(0, 1 - age / maxAge)

            const trailDx = point.x - cellX
            const trailDy = point.y - cellY
            const trailDistance = Math.sqrt(trailDx * trailDx + trailDy * trailDy)
            const trailLinear = Math.max(0, 1 - trailDistance / (spotlightRadius * 0.7))
            // Quadratic falloff for trail too
            const trailProximity = trailLinear * trailLinear

            const trailFactor = trailProximity * ageFactor * 0.6 * glowIntensity
            maxFactor = Math.max(maxFactor, trailFactor)
        }

        return maxFactor
    }, [scaledProximity])

    // Memoize the grid structure
    const gridElements = useMemo(() => {
        return Array.from({ length: grid.rows }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex">
                {Array.from({ length: grid.cols }).map((_, colIndex) => {
                    const index = rowIndex * grid.cols + colIndex
                    const cellX = colIndex * scaledCellSize + scaledCellSize / 2
                    const cellY = rowIndex * scaledCellSize + scaledCellSize / 2
                    const proximityFactor = getProximityFactor(cellX, cellY)
                    const isHovered = hoveredCell === index

                    return (
                        <GridCell
                            key={index}
                            cellSize={scaledCellSize}
                            proximityFactor={proximityFactor}
                            isHovered={isHovered}
                            isMoving={isMoving}
                            gridScale={grid.scale}
                            borderColor={borderColor}
                            onMouseEnter={() => setHoveredCell(index)}
                            onMouseLeave={() => setHoveredCell(null)}
                        />
                    )
                })}
            </div>
        ))
    }, [grid.rows, grid.cols, scaledCellSize, getProximityFactor, hoveredCell, grid.scale, borderColor, renderKey, isMoving])

    return (
        <div
            ref={containerRef}
            className={cn("fixed inset-0 overflow-hidden bg-neutral-950", className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Grid */}
            <div className="absolute inset-0">
                {gridElements}
            </div>

            {/* Center ambient glow */}
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
                style={{
                    width: "60vmin",
                    height: "60vmin",
                    background: `radial-gradient(circle, ${glowColor.replace(/[\d.]+\)$/, "0.3)")} 0%, transparent 70%)`,
                }}
            />

            {/* Vignette */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 0%, transparent 30%, rgba(10,10,10,0.8) 100%)",
                }}
            />

            {/* Content layer */}
            {children && (
                <div
                    className="relative z-10 h-full w-full overflow-y-auto"
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'rgba(34, 211, 238, 0.3) transparent',
                    }}
                >
                    {children}
                </div>
            )}
        </div>
    )
}
