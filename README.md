## Estructura del Proyecto

Vamos a estructurar el proyecto en componentes. Aquí están los componentes que crearemos:

### Componente `listPokemon`

Este componente mostrará una tabla con los Pokémon. Inicialmente mostrará el listado completo de Pokémon. Cuando se introduzca texto en el campo de búsqueda y se pulse Enter, solo se mostrarán los Pokémon que coincidan con la búsqueda en cualquiera de sus campos. Si no se encuentra ningún Pokémon, se mostrará un mensaje indicando que no se ha encontrado nada con el texto introducido. La columna "PODER TOTAL" mostrará la suma de todos los poderes de los Pokémon mostrados. Al hacer clic en "Editar", se dirigirá a la ruta para editar el Pokémon.

### Componente `editPokemon`

Este componente permitirá añadir y editar Pokémon. Contendrá un formulario para añadir/editar Pokémon. El título del formulario cambiará según estemos añadiendo o editando un Pokémon (Agregar Pokémon/Editar Pokémon). Cuando estemos editando, se cargarán los datos del Pokémon desde la API y se permitirá editarlos. El botón "Volver" nos llevará de regreso a la lista de Pokémon de forma programática. Tanto para añadir como para editar, solo se tendrán en cuenta los campos que se ven en la plantilla, tomando el nombre en inglés. Para añadir un tipo, se añadirá solo un tipo, pero para editar se cargarán todos los tipos del Pokémon y se podrán editar, pero no añadir nuevos tipos.

### Componente `search`

Este componente contendrá la funcionalidad de búsqueda y estará oculto inicialmente. Solo se mostrará cuando se pulse el botón "Buscar" y se volverá a ocultar al pulsarlo nuevamente.

### Componente `home`

Este componente contendrá el componente de búsqueda y el componente de lista de Pokémon. El componente de búsqueda estará oculto inicialmente y solo se mostrará cuando se pulse el botón "Buscar", volviendo a ocultarse al pulsarlo nuevamente.

### Componente `navBar`

Este componente contendrá la barra de navegación.

### Rutas

- **Raíz (/)**: Mostrará el componente `home`.
- **/pokemons**: Mostrará el componente `listPokemon`.
- **/add**: Mostrará el componente `editPokemon` para añadir un nuevo Pokémon.
- **/pokemons/+parámetro**: Esta ruta recibirá un parámetro llamado "pokemon" y mostrará el componente `editPokemon` con los datos del Pokémon seleccionado debajo de la tabla de Pokémon.
- Cualquier otra ruta redirigirá a la ruta raíz.

Los Pokémon se obtendrán de un servidor JSON a través de json-server, utilizando el archivo `pokemon.json` adjunto.
