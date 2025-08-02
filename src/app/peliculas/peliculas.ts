export interface PeliculaDTO {
  id: number;
  titulo: string;
  fechaEstreno: Date;
  trailer: string;
  poster: string;
}

export interface PeliculaCreacionDTO {
  titulo: string;
  fechaEstreno: Date;
  trailer: string;
  poster: string;
}