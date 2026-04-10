
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

Todos los mockups, así como el storyboard, se encuentran en imágenes individuales en la carpeta del proyecto, PWM_43.4, concretamente en la ruta ./src/Mockups. Los contenidos de dicho directorio se encuentran aquí listados:


- [Sessions.png](src/Mockups/Desktop/Sessions.png)
- [createdsession.png](src/Mockups/Desktop/createdsession.png)
- [createsession.png](src/Mockups/Desktop/createsession.png)
- [defaultsettings.png](src/Mockups/Desktop/defaultsettings.png)
- [dmcampaignmain.png](src/Mockups/Desktop/dmcampaignmain.png)
- [homepage.png](src/Mockups/Desktop/homepage.png)
- [joinsession.png](src/Mockups/Desktop/joinsession.png)
- [login.png](src/Mockups/Desktop/login.png)
- [playercampaignmain.png](src/Mockups/Desktop/playercampaignmain.png)
- [profilesettings.png](src/Mockups/Desktop/profilesettings.png)
- [signin.png](src/Mockups/Desktop/signin.png)
- [storyboardGrabacion.mp4](./src/Mockups/storyboardGrabacion.mp4)

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

<br>
La página de inicio del proyecto es index.html, que se encuentra concretamente en la ruta ./src/Pages/index, y a partir de ella se puede ir desplazando por el resto de las páginas mediante los botones correspondientes.
<br>
<h3>Templates identificados y su uso en las páginas del proyecto</h3>

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

<br>
Cabe destacar que hay dos templates que están formados por otro template, userIconandName.html. Esos templates son playerSideBar.html y headerLoggedIn.html.
Es por este motivo que userIconandName.html no aparecía en la tabla anterior.
<br>

<h2>Otros aspectos del proyecto</h2>
El único uso de JavaScript que se ha hecho es mediante el script proporcionado por el profesorado para hacer la integración provisional de los templates en las páginas HTML.
<br>
En cuanto a la estructuración de las hojas de estilo, en una primera instancia habíamos asignado una hoja de estilos a cada template. Luego cuando empezamos a montar las páginas haciendo uso de dichos templates, encontramos más cómodo emplear una hoja de estilos para cada página del proyecto y descartar las individuales de cada template. De esta manera fue más sencilla la organización de los contenidos de las páginas y la relación entre ellos.
<br>
Otro aspecto a destacar es que el CSS de las páginas se ha hecho para que se asemeje lo más posible a los mockups presentados, por lo que todavía carecen de la estética final que se le pretende dar a la web. En relación a esto, hay botones a los que todavía no podemos dotar de la finalidad pensada para ellos porque requieren de un uso más avanzado de JavaScript del que se usa en este Sprint. Lo mismo ocurre con los desplegables presentes en algunas de las páginas.
<br>
Por último, en los ajustes por defecto de la sesión, se ha hecho que todo sean campos de texto rellenables en el HTML y en el mockup correspondiente se han dejado las cajas vacías porque todavía no se ha llegado a la decisión de qué ajustes son por defecto y cuáles serán propios de la sesión. Por tanto, esos campos de ajuste no son los definitivos y están a expensas de ser modificados en el Sprint siguiente.



