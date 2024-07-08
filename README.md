# POOP TS

Este proyecto es la migración del prototipo hecho en `jsx` a `tsx`. En busqueda de la escalabilidad y desarrollar buenas prácticas debo hacer esta migración a TS manteniendo la intención del prototipo. Mostrar lo aprendido, seguir aprendiendo y actualizarlo hasta llegar a una versión que me haga sentir orgulloso. Este proyecto es y debe ser mi reflejo.

# TODO 

- Corregir lo siguiente:
  Principio de Abierto/Cerrado (Open/Closed Principle - OCP):

  src/repository/poemRepository.ts: Si poemRepository no está diseñado para ser extendido sin modificar su código fuente, podría estar violando el OCP. Una forma de adherirse a este principio es mediante el uso de interfaces o clases abstractas que permitan la extensión de la funcionalidad sin cambiar el código existente.

  Principio de Inversión de Dependencias (Dependency Inversion Principle - DIP):

  src/util/fetchPoem.ts y src/repository/poemRepository.ts: Si fetchPoem es una dependencia directa de poemRepository y está siendo importada directamente, esto podría violar el DIP. Una mejor práctica sería depender de abstracciones (como interfaces) en lugar de implementaciones concretas, y utilizar inyección de dependencias para proporcionar estas implementaciones concretas

- Aprender Tailwind CSS
- Estilizar los siguientes componentes:
  - Card
  - Header
  - Footer
- Desarrollar tests para:
  - Header
  - Footer