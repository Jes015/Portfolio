export const CVolumeStatus = {
    off: 'off',
    low: 'low',
    medium: 'medium',
    high: 'high'
} as const

export type TVolumeStatus = typeof CVolumeStatus[keyof typeof CVolumeStatus]