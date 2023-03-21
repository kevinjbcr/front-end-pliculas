import { actorPeliculaDTO } from "../actores/actor"
import { cineDTO } from "../cines/cine"
import { generoDTO } from "../generos/genero"

export interface PeliculaDTO {
    id: number
    titulo: string
    resumen: string
    enCines: boolean
    fechaLanzamiento: Date
    trailer: string
    poster: string
    generos: generoDTO[]
    actores: actorPeliculaDTO[]
    cines: cineDTO[]
    proximosEstrenos: boolean
}

export interface PeliculaCreacionDTO {
    titulo: string
    resumen: string
    enCines: boolean
    fechaLanzamiento: Date
    trailer: string
    poster: File
    generosIds: number[]
    actores: actorPeliculaDTO[]
    cinesIds: number[]
}

export interface PeliculasPosGet {
    generos: generoDTO[]
    cines: cineDTO[]
}

export interface LandingPageDTO {
    enCines: PeliculaDTO[]
    proximosEstrenos: PeliculaDTO[]
}