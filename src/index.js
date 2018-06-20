import { createHgComponent } from 'higlass';

window.onload = function here() {

  const hgv = createHgComponent(
  	document.getElementById('development-demo'),
    'http://higlass.io/api/v1/viewconfs/?d=Ay4KP0y9SDGu1uYlh5UebQ',
    { bounded: true }
  );

 }
	