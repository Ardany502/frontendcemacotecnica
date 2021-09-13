import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { FileUploadService } from '../../services/file-upload.service';
import { _productos } from '../../models/productos.models';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent implements OnInit {
  @Input() idurl!:string;
  public imagenSubir!: File;
  public imgTemp: any;
  cargando = false;
  producto: _productos = new _productos('','',0,'',0,'');
  formularioProductos: FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.minLength(3)]],
    descripcion: ['',[Validators.required,Validators.minLength(3)]],
    precio: ['',[Validators.required,Validators.minLength(1)]],
    SKU: ['',[Validators.required,Validators.minLength(1)]],
    inventario: ['',[Validators.required,Validators.minLength(1)]],
    imagen: ['no-imagen'],
  });
  constructor(private fb: FormBuilder, private ProductosService:ProductosService, private fileUploadService:FileUploadService, private router:Router) { 
  }

  ngOnInit(): void {
     
      
       this.idurl!='0'? this.cargarInformacion(): this.cargando = true; 
  }
  guardar()
  {
    
    if(this.idurl==="0")
    {
        //guardar
          this.ProductosService.postCrearProducto(this.formularioProductos.value).subscribe(resp=> {
            if(resp.msj==="ok")
            {
                 this.producto = resp.data;
                 this.fileUploadService.actualizarFoto(this.imagenSubir,'productos',this.producto.id!);
                 Swal.fire('Guardado','Producto ' + this.producto.nombre + ' creado correctamente', 'success');
                 this.ProductosService.nuevaImagen.emit();
                 this.router.navigateByUrl('dashboard/productos');
            }
           
            
        },(err)=> {
              console.log(err);
              
        });
    }else{
        this.producto = this.formularioProductos.value;
        this.producto.id = this.idurl;
        this.ProductosService.putActualizarProducto(this.producto).subscribe(resp=> {

          this.producto = resp.data;
   
          if(this.imagenSubir)
          {
            this.fileUploadService.actualizarFoto(this.imagenSubir,'productos',this.producto.id!);
          }
          Swal.fire('Actualizado','Producto' + this.producto.nombre + ' Actualizado correctamente', 'success');
          this.router.navigateByUrl('dashboard/productos');
        })
     
    }
  
  }
  cargarInformacion()
  {
    this.ProductosService.listarProducto(this.idurl).subscribe(resp=> {
      const {nombre,descripcion, precio, SKU,inventario,imagen, id} =resp.data;
      this.producto= resp.data;
      this.formularioProductos.reset({
        nombre,
        descripcion,
        precio,
        SKU,
        inventario,
        imagen,
      })
      this.cargando = true;
    })
  }

  
  cambiarImagen(e: any): any
  {
    let imagen = e.target.files[0];
    this.imagenSubir = imagen;
    if(!this.imagenSubir)
    {
      return this.imgTemp = null ;
    }
    const reader = new FileReader();
    reader.readAsDataURL(imagen!);
    reader.onloadend = ()=>{
      this.imgTemp = reader.result;
    }
  }
}

