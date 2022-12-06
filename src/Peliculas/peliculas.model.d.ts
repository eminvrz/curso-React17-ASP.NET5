import { actorPeliculaDTO } from '../Actores/actores.model'
import { cineDTO } from '../Cines/cines.model'
export interface peliculaDTO{
    id: number;
    titulo: string;
    poster: string;
    enCines: boolean;
    trailer: string;
    resumen?: string;
    fechaLanzamiento: Date;
    cines: cineDTO[];
    generos: generoDTO[];
    actores: actorPeliculaDTO[]; 
}

export interface peliculasCreacionDTO{
    titulo: string;
    enCines: boolean;
    trailer: string;
    resumen?: string;
    fechaLanzamiento?: Date;
    poster?: File;
    posterURL?: string;
    generosIds?: number[];
    cinesIds?: number[];
    actores?: actorPeliculaDTO[];
}

export interface landingPageDTO{
    enCines?: peliculaDTO[];
    proximosEstrenos?: peliculaDTO[];
}

export interface peliculasPostGetDTO{
    generos: generoDTO[];
    cines: cineDTO[];
}