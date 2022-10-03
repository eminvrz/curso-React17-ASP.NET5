export interface pelicula{
    id: number;
    titulo: string;
    poster: string;
}

export interface peliculasCreacionDTO{
    titulo: string;
    enCines: boolean;
    trailer: string;
    fechaLanzamiento?: Date;
    poster?: File;
    posterURL?: string;
}

export interface landingPageDTO{
    enCartelera?: pelicula[];
    proximosEstrenos?: pelicula[];
}