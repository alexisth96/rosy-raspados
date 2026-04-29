# 🍧 Rosy Raspados — POS instalable

Sistema de punto de venta convertido a **PWA (Progressive Web App)**: se instala como una app real en celular o tablet, funciona 100% offline, y guarda los datos en IndexedDB (mucho más confiable que localStorage).

---

## 📦 Qué hay en este paquete

```
rosy-pwa/
├── package.json              ← dependencias
├── vite.config.js            ← configuración PWA + offline
├── index.html                ← HTML base con metadatos
├── public/
│   ├── icon-192.png          ← icono pequeño (placeholder)
│   ├── icon-512.png          ← icono grande (placeholder)
│   ├── icon-512-maskable.png ← icono Android adaptable
│   ├── apple-touch-icon.png  ← icono iOS
│   ├── favicon.ico           ← icono de pestaña
│   └── favicon.png
└── src/
    ├── main.jsx              ← punto de entrada
    └── App.jsx               ← TU APP (con localForage integrado)
```

Los iconos actuales son **placeholders** con la letra R en azul cobalto. Más adelante los puedes reemplazar con tu logo real.

---

## 🚀 RUTA RECOMENDADA: StackBlitz + Vercel (sin instalar nada)

Esta es la forma más fácil de ponerla en línea sin necesidad de saber programar ni instalar nada en tu computadora. Lo único que necesitas es una cuenta de GitHub (gratis).

### Paso 1 — Subir el proyecto a GitHub

1. Crea una cuenta en [github.com](https://github.com) si no tienes (gratis).
2. Una vez dentro, haz click en el botón verde **"New"** (o ve a [github.com/new](https://github.com/new)).
3. Ponle un nombre al repositorio: `rosy-raspados`.
4. Marca la opción **"Public"** (público).
5. Click en **"Create repository"**.
6. En la siguiente pantalla, busca el botón **"uploading an existing file"** (subir un archivo existente) — está en el texto "Quick setup" arriba.
7. Arrastra **toda la carpeta `rosy-pwa`** o todos los archivos de adentro al área de subida.
8. Abajo, escribe en el campo de mensaje: `Primer subida` y click en **"Commit changes"**.

✅ Ya tienes tu app en GitHub.

### Paso 2 — Conectar con Vercel (deploy automático)

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta usando tu cuenta de GitHub (botón "Continue with GitHub").
2. Una vez dentro del dashboard, click en **"Add New..."** → **"Project"**.
3. Vercel te muestra tus repositorios de GitHub. Busca `rosy-raspados` y click en **"Import"**.
4. En la pantalla de configuración, **no toques nada**, Vercel detecta automáticamente que es Vite. Solo click en **"Deploy"**.
5. Espera 1-2 minutos. Cuando termine, te dará una URL tipo `rosy-raspados.vercel.app`.

✅ Tu app ya está en línea con HTTPS (necesario para PWA).

### Paso 3 — Instalar la app en el celular/tablet

#### En **Android** (Chrome):
1. Abre la URL de Vercel en Chrome.
2. Toca el menú de los 3 puntos arriba a la derecha.
3. Toca **"Instalar app"** o **"Añadir a pantalla de inicio"**.
4. Confirma. Listo, aparece como app real con su ícono.

#### En **iPhone/iPad** (Safari):
1. Abre la URL de Vercel en Safari (no funciona en Chrome de iPhone).
2. Toca el botón de **Compartir** (cuadrado con flecha hacia arriba).
3. Desplázate y toca **"Añadir a pantalla de inicio"**.
4. Confirma. La app aparece como ícono igual que cualquier app nativa.

✅ Ya se ve como app real, sin barra del navegador, abre rápido, funciona offline.

---

## 🔄 Para hacer cambios después

Cada vez que modifiques algo (por ejemplo, agregar funcionalidades nuevas):

1. En GitHub, navega al archivo que quieras editar (ej: `src/App.jsx`).
2. Click en el lápiz (✏️) para editar.
3. Pega el código nuevo.
4. Abajo, click en **"Commit changes"**.
5. Vercel automáticamente detecta el cambio y hace deploy. En 1-2 min ya está actualizado.
6. Cuando la cajera abra la app, la próxima vez se actualiza sola.

---

## 🎨 Cómo cambiar los iconos por el logo real

Cuando tengas tu logo, necesitas estas versiones de imagen (puedes usar [realfavicongenerator.net](https://realfavicongenerator.net) gratis para generarlos automáticamente):

- `icon-192.png` — 192x192 píxeles
- `icon-512.png` — 512x512 píxeles
- `icon-512-maskable.png` — 512x512 con margen de seguridad (para Android)
- `apple-touch-icon.png` — 180x180 píxeles (para iOS)
- `favicon.ico` — 32x32 píxeles

Reemplaza los archivos en la carpeta `public/` y haz commit en GitHub. Vercel hará el deploy automático.

**Tip:** sube tu logo cuadrado a [realfavicongenerator.net](https://realfavicongenerator.net), te genera todos los tamaños y formatos correctos en un ZIP.

---

## 💾 Sobre los datos

### Cómo se guardan ahora (más confiable):
- **IndexedDB** vía localForage: aguanta cientos de MB sin problema
- **localStorage** como respaldo paralelo: si por alguna razón IndexedDB falla, los datos siguen ahí
- **Cache en memoria** durante la sesión: lectura instantánea

### Migración automática:
Si la cajera ya está usando la versión vieja con localStorage, al abrir la nueva versión los datos se migran solos a IndexedDB. No se pierde nada.

### Backup:
Sigues teniendo el botón de **"Hacer backup ahora"** en Configuración para descargar todos los datos como JSON. Recomiendo hacer backup manual cada lunes después del cierre semanal y guardarlo en Google Drive.

### ¿Por qué es más confiable?
- localStorage tiene un límite de 5-10 MB. IndexedDB aguanta 60% del disco del celular.
- Algunos navegadores limpian localStorage cuando se quedan sin espacio. IndexedDB se respeta más.
- IndexedDB es asíncrono, no bloquea la app cuando guardas algo grande.

---

## 🛠️ Si quieres correrlo en tu computadora (opcional, no necesario)

Solo si te interesa probarlo localmente antes de subirlo:

1. Instala Node.js desde [nodejs.org](https://nodejs.org) (versión LTS).
2. Abre la carpeta del proyecto en una terminal.
3. Ejecuta:
   ```
   npm install
   npm run dev
   ```
4. Abre `http://localhost:5173` en el navegador.

Para hacer la versión final que subirías a un servidor:
```
npm run build
```
Esto crea una carpeta `dist/` con archivos optimizados.

---

## ❓ Preguntas frecuentes

### ¿Qué pasa si se va el internet?
La app sigue funcionando 100%. Una vez instalada, no necesita conexión para nada (excepto cosas opcionales como mandar tickets por WhatsApp). Los pedidos, cierres, reportes, todo funciona sin señal.

### ¿Se actualiza sola?
Sí. Cuando hagas cambios y Vercel haga deploy, la próxima vez que la cajera abra la app, se actualiza automáticamente sin tener que reinstalar.

### ¿Puedo usarla en varios dispositivos?
Sí, pero cada dispositivo tiene sus propios datos. Si necesitas que se sincronicen, eso requiere un servidor en internet (más complejo, otro proyecto).

### ¿Cuánto cuesta hostearla en Vercel?
Gratis. El plan gratuito de Vercel da 100 GB/mes de tráfico, más que suficiente para un POS.

### ¿Y si Vercel cambia su política?
Siempre puedes mover el proyecto a otro hosting (Netlify, Cloudflare Pages, GitHub Pages). Es portable.

---

## 📝 Notas finales

- La app funciona en cualquier dispositivo con un navegador moderno (Chrome, Safari, Edge, Firefox).
- En iPhone, **debe** instalarse desde Safari (no Chrome).
- El primer arranque tarda 1-2 segundos cargando datos. Después es instantáneo.
- Para borrar todos los datos del celular: configuración del navegador → datos del sitio → eliminar.

Si tienes dudas técnicas, tu archivo `src/App.jsx` es el mismo de siempre, solo se le agregó arriba la integración con localForage. Todo lo demás (el código de tu sistema, la lógica, los componentes) sigue igual.
#2
