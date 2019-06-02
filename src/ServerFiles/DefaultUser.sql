insert into almacen ( ID_almacen, nombre ) values ( 0,'Borrado');
insert into categoria ( ID_categoria, nombre ) values ( 0, 'Borrado');
insert into subcategoria ( ID_subcategoria, nombre, ID_categoria ) values (0, 'Borrado', 0);
insert into cliente ( ID_cliente, nombre, telefono, direccion ) values ( 0, 'Borrado', '0', 'Borrado');
insert into marca ( ID_marca, nombre ) values ( 0, 'Borrado');
insert into producto ( SKU, nombre, ID_subcategoria, ID_marca, margen_ganancia, porcentaje_impuestos ) values ( '00000000000', 'Borrado', 0, 0, 0, 0 );
insert into lotes ( ID_lotes, SKU, cantidad, costo, fecha_ingreso, ID_almacen, fecha_caducidad ) values ( 0, '00000000000', 0, 0, '1970-01-01', 0, '1970-01-01') ;

insert into roles (productos, clasificacion, lotes, reportes, administrador, nombre, ID_rol) values (5 ,5 ,5 , 5, 2, 'Administrador', 1);
insert into usuarios (user, pass, name, ID_rol, ID_usuario) values ('admin' ,'admin', 'Administrador', 1, 1);
