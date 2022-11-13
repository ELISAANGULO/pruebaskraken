# Kraken

## Escenarios implementados en Kraken

<table align="center">
<tr align="center">
<th><center>Funcionalidad</center></th>
<th><center>Escenarios</center></th>
<th><center>Estado</center></th>
</tr>
<tr align="center">
<th rowspan="4"><center> Crear post</center></th>
<td>Crear posts</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Funcionalidad_Crear_Post">Click aqui</a></td>
</tr>
<tr align="center">
<td>Crear post sin titulo y con contenido</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Funcionalidad_Crear_Post">Click aqui</a></td>
</tr>
<tr align="center">
<td>Crear un post sin titulo ni contenido</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Funcionalidad_Crear_Post">Click aqui</a></td>
</tr>
<tr align="center">
<td>Crear un post y hacer preview</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Funcionalidad_Crear_Post">Click aqui</a></td>
</tr>
<tr align="center">
<th rowspan="4"><center>Crear pagina</center></th>
<td>Crear pagina </td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Pagina_Nueva">Click aqui</a></td>
</tr>
<tr align="center">
<td>Crear pagina sin titulo y con contenido</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Pagina_Sin_Titulo_Con_Contenido">Click aqui</a></td>
</tr>
<tr align="center">
<td>Crear pagina vacia</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Pagina_Vacia">Click aqui</a></td>
</tr>
<tr align="center">
<td>Crear pagina solo con imagen</td>
<td></td>
</tr>
<tr align="center">
<th rowspan="4"><center> Crear tags</center></th>
<td>Crear tags sin nombre</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Tag_Sin_Nombre">Click aqui</a></td>
</tr>
<tr align="center">
<td>Crear tags solo con nombre</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Tag_Solo_Con_Nombre">Click aqui</a></td>
</tr>
<tr align="center">
<td>Crear tags con nombre y descripcion</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Tag_Con_Nombre_Con_Descripcion">Click aqui</a></td>
</tr>
<tr align="center">
<td>Crear tag vacio</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Tag_Vacio">Click aqui</a></td>
</tr>
<tr align="center">
<th rowspan="4"><center> Crear usuario</center></th>
<td>Crear usuario con los datos correctos</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Usuario_Datos_Correctos">Click aqui</a></td>
</tr>
<tr align="center">
<td>Registrar usuario con un email erroneo</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Usuario_Email_Incorrecto">Click aqui</a></td>
</tr>
<tr align="center">
<td>Registrar usuario vacio</td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Usuario_Datos_Vacios">Click aqui</a></td>
</tr>
<tr align="center">
<td>Registrar usuario solo con email y no poner contraseña </td>
<td><a href="https://github.com/ELISAANGULO/pruebaskraken/tree/main/reports/Crear_Usuario_Sin_Contrase%C3%B1a">Click aqui</a></td>
</tr>
<tr align="center">
<th rowspan="4"><center> Crear miembro</center></th>
<td>Añadiendose a uno mismo como miembro</td>
<td></td>
</tr>
<td>Guardar miembro vacio</td>
<td></td>
</tr>
<tr align="center">
<td>Guardar miembro con un email erroneo</td>
<td></td>
</tr>
<tr align="center">
<td>Guardar miembro solo con email y no suscrito a newsletter</td>
<td></td>
</tr>
</table>


## Ejecución

Para la ejecucion primero se tiene que descargar el repositorio colocando en la terminal el siguiente comando:

```shell
$ git clone https://github.com/ELISAANGULO/Kraken.git
```
Luego de haber descargado el repositorio procedera a ejecutar el siguiente comando dentro de la carpeta descargada

```shell
$ npm install kraken-node -g
```

Luego de haber ejecutado el comando anterior procede a ejecutar Kraken con el siguiente comando

```shell
$ ./node_modules/kraken-node/bin/kraken-node run
```
