export class _usuarios {
  constructor(
    public nombre:string,
    public apellido:string,
    public telefono:string,
    public email:string,
    public rol?: string,
    public id?:string,
    public imagen?:string,
    public password?:string,
    public created_at?: string,

  )
  {}
}