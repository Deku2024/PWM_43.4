
<h1>Gestión de perfiles de jugador en D&D</h1>
<br>
<h2>Miembros del equipo</h2>
Carla Gómez García -> @carlagomez22 <br>
Iván Luján Moreno -> @Darknigth99 <br>
Hirahi Torrejón Cruz -> @Deku2024 <br>
<br>
<h2>Descripción del proyecto</h2>
Proponemos una herramienta para facilitar el curso de las sesiones de Dragones y Mazmorras 5e, proporcionando una manera de visualizar y fabricar fichas de personajes de manera dinámica. Además, agiliza la tarea del Dungeon Master (DM) permitiéndole tomar notas de la sesión o realizar tiradas adicionales.

Por otro lado, se porporcionan herramientas para agilizar las sesiones, tales como reuniones online, tiradas de dados con o sin la característica, gestión de vida e inventario y más.

<br>
<h2>Requisitos funcionales</h2>

A continuación, se presentan los requisitos funcionales con los que cuenta el proyecto.

<table>
  <colgroup>
    <col width="8%">
    <col width="27%">
    <col width="65%">
  </colgroup>
  <thead>
    <tr>
      <th>ID</th>
      <th>Nombre del requisito</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RF1</td>
      <td>Iniciar sesión / Crear cuenta</td>
      <td>El usuario tendrá que iniciar sesión o registrarse para poder utilizar las funcionalidades de la web.</td>
    </tr>
    <tr>
      <td>RF2</td>
      <td>Ajustes de la cuenta</td>
      <td>El usuario podrá editar su perfil personal en cualquier momento.</td>
    </tr>
    <tr>
      <td>RF3</td>
      <td>Crear sesión</td>
      <td>El usuario podrá crear sesiones de juego.</td>
    </tr>
    <tr>
      <td>RF4</td>
      <td>Unirse a sesión</td>
      <td>El usuario podrá unirse a una sesión creada por otro jugador mediante un ID.</td>
    </tr>
    <tr>
      <td>RF5</td>
      <td>Ajustes predeterminados de la sesión</td>
      <td>El usuario creador de la sesión podrá establecer unos ajustes predeterminados para las sesiones que cree.</td>
    </tr>
    <tr>
      <td>RF6</td>
      <td>Ajustes de la sesión</td>
      <td>El usuario propietario de la sesión podrá cambiar los ajustes específicos de la partida en cualquier momento estando dentro de esta.</td>
    </tr>
    <tr>
      <td>RF7</td>
      <td>Rol del usuario</td>
      <td>El usuario podrá ser jugador normal o Dungeon Master (DM).</td>
    </tr>
    <tr>
      <td>RF8</td>
      <td>Ficha de jugador</td>
      <td>El usuario en rol de jugador podrá crear y gestionar las fichas de sus personajes.</td>
    </tr>
    <tr>
      <td>RF9</td>
      <td>Notas del Dungeon Master (DM)</td>
      <td>El usuario propietario de la partida tendrá el rol de Dungeon Master y podrá crear notas en la sesión.</td>
    </tr>
    <tr>
      <td>RF10a</td>
      <td>Visualizar otros perfiles de jugador</td>
      <td>El usuario con rol de jugador podrá ver una versión reducida de las fichas de jugador de los usuarios que pertenezcan a la misma sesión.</td>
    </tr>
    <tr>
      <td>RF10b</td>
      <td>Visualizar otros perfiles de jugador como DM</td>
      <td>El usuario propietario de la sesión podrá tener acceso a una versión completa de los perfiles de jugador de los usuarios que formen parte de la campaña.</td>
    </tr>
    <tr>
      <td>RF11</td>
      <td>Tiradas de dados</td>
      <td>El usuario, independientemente de su rol, deberá ser capaz de poder tirar distintos tipos de dados con o sin modificadores añadidos a la tirada.</td>
    </tr>
    <tr>
      <td>RF12</td>
      <td>Registro tiradas de dados</td>
      <td>El usuario, independientemente de su rol, deberá ser capaz de poder ver un histórico con las tiradas que se han hecho a lo largo de la sesión.</td>
    </tr>
  </tbody>
</table>

<br>

<h2>Mockups y templates</h2>

<h3>Ubicación de los mockups</h3>

Los mockups correspondientes a las adaptaciones a distintos dispositivos se encuentram en el directorio ./src/Mockups. En dicho directorio se encuentran tres carpetas que corresponden a los mockups de Desktop, Tablet y Mobile. La estructura quedaría de la siguiente manera:

```
src/
  └── Mockups/
        ├── Desktop/
        ├── Mobile/
        └── Tablet/
```

Los nombres de los mockups dentro de estos tres directorios son iguales y son los listados a continuación:

- Sessions.png
- createdsession.png
- createsession.png
- defaultsettings.png
- dmcampaignmain.png
- homepage.png
- joinsession.png
- login.png
- playercampaignmain.png
- profilesettings.png
- signin.png
- [storyboardGrabacion.mp4](./src/Mockups/storyboardGrabacion.mp4) (hacen falta cambios)

<br>
<h3>Breve explicación de los mockups</h3>

 - Sessions.png: Muestra las sesiones de las que el usuario forma parte o es propietario, desde aquí también se puede unir a una sesión con el botón correspondiente.
- createdsession.png: Muestra la información de la sesión ya creada.
- createsession.png: Formulario para que el usuario cree la sesión.
- defaultsettings.png: Son los ajustes por defecto de las sesiones que cree el usuario.
- dmcampaignmain.png: Es lo que ve el usuario con rol de DM cuando entra en la sesión.
- homepage.png: Este mockup es el punto de partida de la aplicación web. Pretende mostrar información de lo que es posible hacer con las funcionalidades de la web.
- joinsession.png: Permite unirse a las sesiones creadas por otros usuarios proporcionando el ID de la sesión y una contraseña si dicha sesión ha sido configurada de esa manera.
- login.png y sigin.png: Pantallas de acceso a la web. Permiten iniciar sesión o registrarse.
- profileSettings.png: Son los ajustes de la cuenta del usuario, donde puede entre otros, actualizar sus datos.
- playercampaignmain.png: Es lo que el usuario que tenga rol de jugador verá cuando entre en una sesión de la que no es propietario.

<br>
<h3>Relación entre los mockups y las páginas HTML</h3>

Se presenta a continuación un listado de todas las páginas HTML de las que dispone el proyecto, junto al mockup al que corresponden

- LogIn.html  ⇒   [login.png](./login.png)
- SignIn.html  ⇒  [signin.png](./signin.png)
- allSessions.html  ⇒  [Sessions.png](./Sessions.png)
- createSession.html  ⇒  [createsession.png](./createsession.png)
- createdSession.html  ⇒  [createdsession.png](./createdsession.png)
- defaultSettings.html  ⇒  [defaultsettings.png](./defaultsettings.png)
- dmCampaignMain.html  ⇒  [dmcampaignmain.png](./dmcampaignmain.png)
- index.html  ⇒   [homepage.png](./homepage.png)
- joinSession.html  ⇒  [joinsession.png](./joinsession.png)
- playerCampaignMain.html  ⇒  [playercampaignmain.png](./playercampaignmain.png)
- profileSettings.html  ⇒  [profilesettings.png](./profilesettings.png)


La página de inicio del proyecto es index.html, que se encuentra concretamente en la ruta ./src/Pages/index, y a partir de ella se puede ir desplazando por el resto de las páginas mediante los botones correspondientes.

<br><br>

### Templates identificados y su uso en las páginas del proyecto

En este apartado se muestran los templates identificados y su uso en las distintas páginas del proyecto. Todos los templates se pueden encontrar en la ruta ./src/Templates

- characteristicBlockTemplate.html
- dmNote.html
- footer.html
- header.html
- headerLoggedIn.html
- logTiradas.html
- navbar.html
- playersSideBar.html
- sessionMenu.html
- textAndNumberFieldTemplate.html
- userIconandName.html

<br>
En la siguiente tabla se indica la página html y los templates que forman parte de ellas.
<br>

<table>
  <thead>
    <tr>
      <th>Nombre página HTML</th>
      <th>Templates</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>LogIn.html</td>
      <td>
        <ul>
          <li>header.html</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>SignIn.html</td>
      <td>
        <ul>
          <li>header.html</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>allSessions.html</td>
      <td>
        <ul>
          <li>headerLoggedIn.html</li>
          <li>navbar.html</li>
          <li>sessionMenu.html</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>createSession.html</td>
      <td>
        <ul>
          <li>headerLoggedIn.html</li>
          <li>navbar.html</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>createdSession.html</td>
      <td>
        <ul>
          <li>headerLoggedIn.html</li>
          <li>navbar.html</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>defaultSettings.html</td>
      <td>
        <ul>
          <li>headerLoggedIn.html</li>
          <li>navbar.html</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>dmCampaignMain.html</td>
      <td><ul>
          <li>headerLoggedIn.html</li>
          <li>dmNote.html</li>
          <li>logTiradas.html</li>
          <li>playersSideBar.html</li>
        </ul></td>
    </tr>
    <tr>
      <td>index.html</td>
      <td>
        <ul>
          <li>header.html</li>
          <li>footer.html</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>joinSession.html</td>
      <td>
        <ul>
          <li>headerLoggedIn.html</li>
          <li>navbar.html</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>playerCampaignMain.html</td>
      <td>
        <ul>
          <li>headerLoggedIn.html</li>
          <li>playerSiderBar.html</li>
          <li>logTiradas.html</li>
          <li>textAndNumberFieldTemplate.html</li>
          <li>characteristicBlockTemplate.html</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>profileSettings.html</td>
      <td>
        <ul>
          <li>headerLoggedIn.html</li>
          <li>navbar.html</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Cabe destacar que hay dos templates que están formados por otro template, userIconandName.html. Esos templates son playerSideBar.html y headerLoggedIn.html.
Es por este motivo que userIconandName.html no aparecía en la tabla anterior.

<br>

<h2>Aspectos responsive implementados en cada página</h2>

Para el RWD de tablet en modo *landscape* los layouts de las páginas no sufrieron muchos cambios respecto a la versión Desktop. En cambio, para el modo *portrait* se hicieron las mismas adaptaciones que tomaron para el diseño en móviles, de las que se hablan seguidamente.

La realización del RWD para móviles ha sido el que más cambios ha supuesto. En primer lugar, se ha sustituido la barra de navegación lateral por un menú hamburguesa, que contiene las mismas opciones. Además, en dmCampaignMain.html y playerCampaignMain.html se realizó otra gran adaptación: hacer que el log de las tiradas realizadas y la lista de miembros de la campaña de convirtieran en desplegables que surgen de los laterales de la pantalla. También se tuvieron que quitar de la vista principal los desplegables de Inventario, Habilidades de Clase y Habilidades; que ahora se encuentran en un desplegable que sale de la parte inferior de la pantalla.

Por otro lado, en la Home Page del proyecto (index.html), se tuvo que hacer que los *cards* con la información de la página se mostraran de uno en uno, en vez de los tres a la vez. Para lograr esto se hizo un carrousel únicamente con CSS que permite deslizar por dichas *cards*.

A continuación se listan las páginas y los cambios que ha sufrido cada una:

<table>
  <thead>
    <tr>
      <th>Nombre página HTML</th>
      <th>Cambios para RWD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>LogIn.html</td>
      <td>
        <ul>
          <li>Se ha cambiado la disposición de los botones de la parte inferior del formulario.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>SignIn.html</td>
      <td>
        <ul>
          <li>Se ha cambiado la disposición de los botones de la parte inferior del formulario.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>allSessions.html</td>
      <td>
        <ul>
          <li>Implementa el menú hamburguesa en vez de la barra de navegación lateral.</li>
          <li>Se ha eliminado el botón de unirse y se puede clicar directamente sobre el recuadro de la sesión para entrar en ella.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>createSession.html</td>
      <td>
        <ul>
          <li>Implementa el menú hamburguesa en vez de la barra de navegación lateral.</li>
          <li>Se elimina texto explicativo.</li>
          <li>Todos los elementos del formulario van en la misma columna.</li>
          <li>Se ajusta tamaño y disposición de la imagen.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>createdSession.html</td>
      <td>
        <ul>
          <li>Implementa el menú hamburguesa en vez de la barra de navegación lateral.</li>
          <li>Se ajusta tamaño y disposición de la imagen.</li>
          <li>Los apartados de la página se reordenan para que se muestren uno debajo del otro, en vez de en dos grandes columnas.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>defaultSettings.html</td>
      <td>
        <ul>
          <li>Implementa el menú hamburguesa en vez de la barra de navegación lateral.</li>
          <li>Los campos de ajuste se sitúan uno debajo del otro, en vez de en dos columnas</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>dmCampaignMain.html</td>
      <td>
        <ul>
          <li>Implementa el menú hamburguesa en vez de la barra de navegación lateral.</li>
          <li>Los apartados laterales de log de tiradas y lista de miembros se ocultan en desplegables que se pueden mostrar con sus botones correspondientes en la parte inferior de la pantalla.</li>
          <li>El menú hamburguesa se ha adaptado para que en vez de mostrar las opciones de navegación permita salir de la sesión.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>index.html</td>
      <td>
        <ul>
          <li>La información de la página se muestra de una en una en un carrousel, como se indicó anteriormente.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>joinSession.html</td>
      <td>
        <ul>
          <li>Implementa el menú hamburguesa en vez de la barra de navegación lateral.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>playerCampaignMain.html</td>
      <td>
        <ul>
          <li>Implementa el menú hamburguesa en vez de la barra de navegación lateral.</li>
          <li>Los apartados laterales de log de tiradas y lista de miembros se ocultan en desplegables que se pueden mostrar con sus botones correspondientes en la parte inferior de la pantalla.</li>
          <li>El menú hamburguesa se ha adaptado para que en vez de mostrar las opciones de navegación permita salir de la sesión.</li>
          <li>Los desplegables de Inventario, Habilidades y Habilidades de clase se ocultan en un desplegable que surge de la parte inferior de la pantalla, accesible también desde la parte inferior de la pantalla.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>profileSettings.html</td>
      <td>
        <ul>
          <li>Se han dispuesto todos los elementos de la página uno debajo del otro.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<br><br>

<h2>Carga de templates y contenido JSON</h2>

Las páginas que realizan carga de templates, y de qué templates se tratan, están ya especificadas en [este](#Templates-identificados-y-su-uso-en-las-páginas-del-proyecto) apartado del README.md. En el proyecto, la única modificación que se ha realizado es la carga de estos templates utilizando JavaScript.

En cuanto a las páginas que utilizan carga de contenidos JSON, se ha realizado de manera local. Los archivos .json se encuentran en el directorio Data y son los siguientes:

```
src/
  └── Data/
        ├── content.json
        ├── playersheets.json
        ├── sessions.json
        └── users.json
```

Breve explicación de los contenidos de cada archivo:

- content.json  ⇒ se trata de los contenidos que van en la Home Page (index.html) del proyecto.
- playersheets.json  ⇒ son los datos de las fichas de jugador, que cuentan con identificador que las mapea a un usuario.
- sessions.json  ⇒ contiene información sobre las sesiones e igualmente están mapeadas a un usuario mediante un identificador.
- users.json  ⇒ son los usuarios que hay en el sistema ahora mismo. Cada uno cuenta con un identificador único.
  
<br><br>
Las páginas del proyecto que hacen uso de estos archivos se especifican en la siguiente tabla:

<table>
  <thead>
    <tr>
      <th>Nombre página HTML</th>
      <th>Carga de contenidos JSON</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>LogIn.html</td>
      <td>
        <ul>
          <li>Utiliza <em>users.json</em> para la validación del inicio de sesión.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>SignIn.html</td>
      <td>
        <ul>
          <li>No hace uso de carga dinámica de contenido.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>allSessions.html</td>
      <td>
        <ul>
          <li>Se usa <em>sessions.json</em>para cargar las sesiones del usuario que ha iniciado sesión.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>createSession.html</td>
      <td>
        <ul>
          <li>No hace uso de carga dinámica de contenido.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>createdSession.html</td>
      <td>
        <ul>
          <li>No hace uso de carga dinámica de contenido.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>defaultSettings.html</td>
      <td>
        <ul>
          <li>No hace uso de carga dinámica de contenido.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>dmCampaignMain.html</td>
      <td>
        <ul>
          <li>No hace uso de carga dinámica de contenido.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>index.html</td>
      <td>
        <ul>
          <li>Hace uso de <em>content.json</em> para cargar el texto de la página.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>joinSession.html</td>
      <td>
        <ul>
          <li>No hace uso de carga dinámica de contenido.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>playerCampaignMain.html</td>
      <td>
        <ul>
          <li>No hace uso de carga dinámica de contenido.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>profileSettings.html</td>
      <td>
        <ul>
          <li>No hace uso de carga dinámica de contenido.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<br><br>

<h2>Validación nativa de formularios HTML por parte del cliente</h2>
La validación de formularios se ha realizado principalmente en las páginas de incio de sesión (logIn.html) y de registro (signIn.html).

A continuación se muestran los campos con los que cuenta el formulario de registro y la validación que se ha realizado en cada campo:

- Nombre de usuario ⇒ es un campo requerido, con un longitud mínima de 6 y máxima de 25 caracteres. Además debe cumplir con el patrón **^[A-Za-z0-9._\-]+$** que indica que el nombre será alfanumérico, con mayúsculas incluidas, y que solo admite los caracteres especiales . _ -
- Correo electrónico ⇒ es un campo requerido y debe seguir la estructura de un email, para ello en la correspondiente etiqueta HTML se ha especificado type="email".
- Contraseña ⇒ es un campo requerido. Debe cumplir con el siguiente patrón: **/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,15}$/**, que recoge estas especificaciones:
    - Tendrá una longitud acotada entre 8 y 15 caracteres.
    - Debe contener al menos una letra (mayúscula o minúscula).
    - Debe contener al menos un número.
    - Debe contener al menos uno de los siguientes símbolos: @ $ ! % * ? &.
- Repetir contraseña ⇒ es un campo obligatorio y la contraseña introducida debe coincidir con la indicada en el campo anterior.

<br><br>

En cuanto al formulario de inicio de sesión, se cuenta con un usuario dummy, que se encuentra almacenado en el fichero users.json. Sus credenciales son las siguientes:

    Nombre de usuario: elmagofurioso
    Contraseña: pwm2026

La única manera de poder acceder al resto de páginas que pertenecen al área privada del usuario es introduciendo bien estos parámetros, ya que en caso contrario aparecen los errores correspondientes en la validación.

Esta validación se ha realizado comparando los datos introducidos con los existentes en el fichero users.json en el fichero JS correspondiente a la página logIn.html.

<br><br>

<h2>Otros aspectos del proyecto</h2>
Respecto al sprint anterior, creemos necesario comentar ciertos cambios que han ocurrido en la estructura del proyecto. Mientras que cada página cuenta con su directorio propio donde se encuentran sus respectivos archivos .html, .css y .js, en la realización del sprint se ha considerado la necesidad de tener scripts de JavaScript y hojas de estilo que son comunes para algunas páginas. Es por ello que en ./src existen dos directorios destinados a contener estos ficheros. Se tratan de ./src/Scripts y ./src/Styles.
<br><br>
Otro cambio a destacar en relación al sprint anterior, es que ya se han determinado cuáles serán los ajustes por defecto de la sesión y se ha modificado el defaultSettings.html acorde a estas decisiones. Además, con la incorporación de JS se ha podido dotar de funcionalidad a algunos botones: ahora al entrar en una sesión se detectará si el usuario es el DM (Dungeon Master) de dicha sesión para mostrar la página que corresponde. Sin embargo, el botón de borrar sigue careciendo de funcionalidad.
<br><br>
En este sprint, también se ha dotado a las páginas de una estética y estilos más similares a lo que habíamos pensado para el proyecto en un principio, pudiéndose mejorar en próximos sprints. Por otro lado, la carga de contenido en dmCampaignMain.html, playerCampaignMain.html y createdSession.html, debido a la complejidad que supone se ha aplazado para el sprint siguiente.




