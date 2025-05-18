# Petstore API - Felhasználói útmutató
Az alábbi útmutató a Petstore API használatát hivatott bemutatni. Az API lehetővé teszi a felhasználónak, hogy eladó kisállatait (pet) rögzítse és kezelje. Az alábbi funkciók lehetővé teszik az új kisállatok rögzítését, lekérését, szerkesztését és törlését.

## 1) Kezdő lépések

### 1.1) API elérés
Az API végpontokat a https://petstore.swagger.io/v2 alap URL-el érheted el.

### 1.2) Azonosítás
Egyes API-k meghívása esetén egy API kulcsra lesz szükséged, hogy a szerver a kérést feldolgozza. Ehhez a kérés header részében `api_key` paraméterként kell megadnod a `"special-key"` string értéket minden kérés küldése előtt.

### 1.3) Formátum
A rendszer JSON, illetve XML formátumot képes kezelni. Mind a kérés, mind a válasz üzenet body tartalma felhasználó által specifikálható külön-külön. A `Content-Type` header paraméterben állapíthatod meg, hogy melyik formátumban küldöd a kérést `"application/json"`, illetve `"application/xml"` értékekkel. Hasonlóan az `accept` header paraméterben tudod beállítani, hogy milyen formátumban várod a választ, melyben szintén a `"application/json"` és `"application/xml"` értékeket adhatod meg tetszőlegesen.

## 2) Funkciók
### 2.1) Új kisállat létrehozása
A POST /pet végpontra küldött kéréssel új kissálatot hozhatsz létre a szerveren. Ehhez a következő adatokat szükséges megadnod a kérés body részében JSON (vagy XML) formátumban.

#### Kötelező paraméterek
 - `name`: A kisállat neve.
 - `photoUrls`: A kisállatot ábrázoló képek URL címei listában megadva. (A paraméter kötelező, de lehet üres lista képek nélkül)

#### Opcionális paraméterek
 - `id`: A kisállathoz rendelt egyedi azonosító (szám) is megadható. Alapértelmezetten egy véletlengenerált azonosítót kap.
 - `category`: JSON formátumban opcionálisan megadható a kisállat kategóriája, ezt `{"id": 0, "name":"string"}` formátumban kell magadni.
 - `tags`: Különböző kulcsszavak megadhatóak egy listában. A lista elemeit `{"id": 0, "name":"string"}` formátumban kell megadni.
 - `status`: Értéke lehet `available`, `pending`, `sold`. Alapértelmezett értéke `available`.

#### Válasz üzenet
Sikeres válasz esetén a body tartalmazza a létrejött kisállat minden leíró attribútumát, az előre megadott, vagy generált `id` paraméterrel együtt.

### 2.2) Kisállat lekérdezése
Korábban a 2.1-es lépésben létrehozott kisállatokat lekérdezheted `id` alapján. 
A GET /pet/petId végpont meghívásával visszakaphatod a regisztrált kisállat leíró attribútumait, amennyiben létezik a megadott azonosító. A `petId` a POST /pet kérés válaszüzenetében szerepel létrehozáskor, ezt kell a URL-be behelyettesíteni.

#### Válasz üzenet
Sikeres válasz esetén a body tartalmazza a kisállat minden leíró attribútumát.

### 2.3) Kisállat adatainak szerkesztése
Korábban a 2.1-es lépésben létrehozott kisállatok adatait módosíthatod utólag `id` alapján.
A módosítandó adatokat a body részben kell megadni, a 2.1-es pontban meghatározott módon. Ha a megadott `id`-val nem található kisállat a rendszerben, akkor létrehozza azt.

#### Válasz üzenet
Sikeres válasz esetén a 2.1-es ponthoz hasonlóan a létrehozott/módosított kisállat adatait adja vissza.

### 2.4) Kisállat törlése
Korábban a 2.1-es lépésben létrehozott kisállatok törölhetőek `id` alapján.
> Ez a végpont authentikációt igényel! Olvasd el az 1.2-es pontot a részletekért.

A DELETE /pet/petId végpont meghívásával törölheted a regisztrált kisállatot a rendszerből. A `petId` a POST /pet kérés válaszüzenetében szerepel létrehozáskor, ezt kell a URL-be behelyettesíteni.
==A törölt kisállat nem visszaállítható!==

## 3) Hibakezelés
Minden sikeres kérés esetén 2##-as (200) státusz kóddal ellátott válasz üzenetet kapsz vissza, amely body tartalma JSON, vagy XML formátumban olvasható (kéréstől függően). Hiba esetén 4##-as (400, 404) státusz kód szerepel a válasz üzenetben, amely body tartalma ez esetben a hiba leírását tartalmazza.

## 4) Kódpéldák
### 4.1) POST /pet
```curl
curl -X 'POST' \
  'https://petstore.swagger.io/v2/pet' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{"id": 100,
       "category": {"id": 1,
                    "name": "dog"},
       "name": "Pamacs",
       "photoUrls": [],
       "tags": [{"id": 11,
                 "name": "mops"}],
       "status": "available"}'
```

### 4.2) GET /pet/petId
```curl
curl -X 'GET' \
  'https://petstore.swagger.io/v2/pet/100' \
  -H 'accept: application/json'
```

### 4.3) PUT /pet
```curl
curl -X 'PUT' \
  'https://petstore.swagger.io/v2/pet' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{"id": 100,
       "status": "sold"}'
```

### 4.4) DELETE /pet/petId
```curl
curl -X 'DELETE' \
  'https://petstore.swagger.io/v2/pet/100' \
  -H 'accept: application/json' \
  -H 'api_key: special-key'
```