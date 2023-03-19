export interface actorDTO {
    id: number
    nombre: string
    fechaNacimiento: Date
    foto: string
    biografia: string


}

export interface actoreCreacionDTO {
    nombre: string
    fechaNacimiento: Date
    foto: File
    biografia: string
}