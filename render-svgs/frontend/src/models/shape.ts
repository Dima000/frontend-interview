export type Shape = {
    objectType: 'circle' | 'square' | 'diamond';
    position: {
        x: number;
        y: number;
    },
    label: string;
    id: string;
}
