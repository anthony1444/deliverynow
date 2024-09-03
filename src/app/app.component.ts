import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';


// barrio.interface.ts
export interface Barrio {
  name: string;
  price: string | number;
  idzona: number
}
export interface Zona {
  id: number;
  name:string
  "idtabulador":number

}



// tabulador.interface.ts
export interface Tabulador {
  id:number;
  name: string;
}



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule, MatGridListModule,  MatFormFieldModule,
    MatSelectModule,MatIconModule,
    MatListModule,
    MatCardModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

    tabulador:Tabulador[] = [
      {
        "id": 1,
        "name": "Belen"
      },
      {
        "id": 2,
        "name": "Calazanz"
      },
      {
        "id": 3,
        "name": "Los Colores"
      },
      {
        "id": 4,
        "name": "Laureles"
      }
    ]
    zona:Zona[] = [
      { "id": 1, "name": "Manrique", "idtabulador":1 },
      { "id": 2, "name": "Aranjuez", "idtabulador":1 },
      { "id": 3, "name": "Castilla", "idtabulador":1 },
      { "id": 4, "name": "12 de Octubre", "idtabulador":1 },
      { "id": 5, "name": "La América", "idtabulador":1 },
      { "id": 6, "name": "San Javier", "idtabulador":1 },
      { "id": 7, "name": "Robledo", "idtabulador":1 },
      { "id": 8, "name": "Villa Hermosa", "idtabulador":1 },
      { "id": 9, "name": "Poblado", "idtabulador":1 },
      { "id": 10, "name": "Guayabal", "idtabulador":1 },
      { "id": 11, "name": "BUENOS AIREs", "idtabulador":1 },
      { "id": 12, "name": "La Candelaria", "idtabulador":1 },
      { "id": 13, "name": "Laureles Estadio", "idtabulador":1 },
      { "id": 14, "name": "Belén", "idtabulador":1 },
      
      { "id": 15, "name": "Manrique", "idtabulador":2 },
      { "id": 16, "name": "Aranjuez", "idtabulador":2 },
      { "id": 17, "name": "Castilla", "idtabulador":2 },
      { "id": 18, "name": "12 de Octubre", "idtabulador":2 },
      { "id": 19, "name": "La América", "idtabulador":2 },
      { "id": 20, "name": "San Javier", "idtabulador":2 },
      { "id": 21, "name": "Robledo", "idtabulador":2 },
      { "id": 22, "name": "Villa Hermosa", "idtabulador":2 },
      { "id": 23, "name": "Buenos Aires", "idtabulador":2 },
      { "id": 24, "name": "La Candelaria", "idtabulador":2 },
      { "id": 25, "name": "Laureles Estadio", "idtabulador":2 },
      { "id": 26, "name": "Poblado", "idtabulador":2 },
      { "id": 27, "name": "Guayabal", "idtabulador":2 },
      { "id": 28, "name": "Belén", "idtabulador":2 },


      { "id": 29, "name": "Manrique", "idtabulador":3 },
      { "id": 30, "name": "Aranjuez", "idtabulador":3 },
      { "id": 31, "name": "Castilla", "idtabulador":3 },
      { "id": 32, "name": "12 de Octubre", "idtabulador":3 },
      { "id": 33, "name": "La América", "idtabulador":3 },
      { "id": 34, "name": "San Javier", "idtabulador":3 },
      { "id": 35, "name": "Robledo", "idtabulador":3 },
      { "id": 36, "name": "Villa Hermosa", "idtabulador":3 },
      { "id": 37, "name": "Buenos Aires", "idtabulador":3 },
      { "id": 38, "name": "La Candelaria", "idtabulador":3 },
      { "id": 39, "name": "Laureles Estadio", "idtabulador":3 },
      { "id": 40, "name": "Belén", "idtabulador":3 },
      { "id": 41, "name": "Guayabal", "idtabulador":3 },
      { "id": 42, "name": "Poblado", "idtabulador":3 },

      { "id": 43, "name": "Manrique", "idtabulador":4  },
      { "id": 44, "name": "Aranjuez", "idtabulador":4  },
      { "id": 45, "name": "Castilla", "idtabulador":4  },
      { "id": 46, "name": "12 de Octubre", "idtabulador":4  },
      { "id": 47, "name": "La América", "idtabulador":4  },
      { "id": 48, "name": "San Javier", "idtabulador":4  },
      { "id": 49, "name": "Robledo", "idtabulador":4  },
      { "id": 50, "name": "Villa Hermosa", "idtabulador":4  },
      { "id": 51, "name": "Poblado", "idtabulador":4  },
      { "id": 52, "name": "Buenos Aires", "idtabulador":4  },
      { "id": 53, "name": "La Candelaria", "idtabulador":4  },
      { "id": 54, "name": "Laureles Estadio", "idtabulador":4  },
      { "id": 55, "name": "Belén", "idtabulador":4  },
      { "id": 56, "name": "Guayabal", "idtabulador":4 }
    ]
    
    barrio:Barrio[] = [
      {
        "name": "Manrique Oriental",
        "price": 16000,
        "idzona": 1
      },
      {
        "name": "Manrique Central",
        "price": 15000,
        "idzona": 1
      },
      {
        "name": "Aranjuez",
        "price": 16000,
        "idzona": 2
      },
      {
        "name": "Berlín",
        "price": 15000,
        "idzona": 2
      },
      {
        "name": "Palermo",
        "price": 14000,
        "idzona": 2
      },
      {
        "name": "La Piñuela",
        "price": 15000,
        "idzona": 2
      },
      {
        "name": "Las Esmeraldas",
        "price": 14000,
        "idzona": 2
      },
      {
        "name": "Campo Valdés 1",
        "price": 13000,
        "idzona": 2
      },
      {
        "name": "San Pedro",
        "price": 13000,
        "idzona": 2
      },
      {
        "name": "Miranda",
        "price": 14000,
        "idzona": 2
      },
      {
        "name": "Moravia",
        "price": 14000,
        "idzona": 2
      },
      {
        "name": "Los Álamos",
        "price": 14000,
        "idzona": 2
      },
      {
        "name": "Brasilia",
        "price": 14000,
        "idzona": 2
      },
      {
        "name": "Toscana",
        "price": 16000,
        "idzona": 3
      },
      {
        "name": "Las Brisas",
        "price": 14000,
        "idzona": 3
      },
      {
        "name": "Florencia",
        "price": 15000,
        "idzona": 3
      },
      {
        "name": "Tejelo",
        "price": 14000,
        "idzona": 3
      },
      {
        "name": "Boyacá",
        "price": 15000,
        "idzona": 3
      },
      {
        "name": "Girardot",
        "price": 15000,
        "idzona": 3
      },
      {
        "name": "Belalcázar",
        "price": 15000,
        "idzona": 3
      },
      {
        "name": "Tricentenario",
        "price": 15000,
        "idzona": 3
      },
      {
        "name": "Castilla",
        "price": 14000,
        "idzona": 3
      },
      {
        "name": "Alfonso López",
        "price": 13000,
        "idzona": 3
      },
      {
        "name": "Francisco Antonio Zea",
        "price": 13000,
        "idzona": 3
      },
      {
        "name": "El Progreso",
        "price": 12000,
        "idzona": 3
      },
      {
        "name": "Caribe",
        "price": 12000,
        "idzona": 3
      },
      {
        "name": "Santander",
        "price": "POR KM ",
        "idzona": 4
      },
      {
        "name": "Pedregal",
        "price": "POR KM ",
        "idzona": 4
      },
      {
        "name": "Doce de Octubre 1",
        "price": "POR KM ",
        "idzona": 4
      },
      {
        "name": "El Progreso 2",
        "price": "POR KM ",
        "idzona": 4
      },
      {
        "name": "El Triunfo",
        "price": "POR KM ",
        "idzona": 4
      },
      {
        "name": "Mirador del 12",
        "price": "POR KM ",
        "idzona": 4
      },
      {
        "name": "Picacho",
        "price": "POR KM ",
        "idzona": 4
      },
      {
        "name": "San Martín de Porres",
        "price": "POR KM ",
        "idzona": 4
      },
      {
        "name": "Kennedy",
        "price": "POR KM ",
        "idzona": 4
      },
      {
        "name": "La Esperanza",
        "price": "POR KM ",
        "idzona": 4
      },
      {
        "name": "Santa Teresita",
        "price": 3000,
        "idzona": 5
      },
      {
        "name": "Simón Bolívar",
        "price": 3000,
        "idzona": 5
      },
      {
        "name": "Santa Mónica",
        "price": 3000,
        "idzona": 5
      },
      {
        "name": "Cristóbal",
        "price": 3000,
        "idzona": 5
      },
      {
        "name": "Campo Alegre",
        "price": 3000,
        "idzona": 5
      },
      {
        "name": "Eduardo",
        "price": 3000,
        "idzona": 5
      },
      {
        "name": "La América",
        "price": 3000,
        "idzona": 5
      },
      {
        "name": "Los Pinos",
        "price": 3000,
        "idzona": 5
      },
      {
        "name": "Santa Lucía",
        "price": 3000,
        "idzona": 5
      },
      {
        "name": "Floresta",
        "price": 3000,
        "idzona": 5
      },
      {
        "name": "Calasanz Parte Alta",
        "price": 10000,
        "idzona": 5
      },
      {
        "name": "Ferrini",
        "price": 5000,
        "idzona": 5
      },
      {
        "name": "Calasanz Parte Baja",
        "price": 9000,
        "idzona": 5
      },
      {
        "name": "Laureles Campestre",
        "price": 9000,
        "idzona": 5
      },
      {
        "name": "El Pesebre",
        "price": 8000,
        "idzona": 5
      },
      {
        "name": "Altamira",
        "price": 3000,
        "idzona": 5
      },
      {
        "name": "Betania",
        "price": 10000,
        "idzona": 6
      },
      {
        "name": "El Corazón",
        "price": 11000,
        "idzona": 6
      },
      {
        "name": "Nuevos Conquistadores",
        "price": 12000,
        "idzona": 6
      },
      {
        "name": "Las Independencias",
        "price": 12000,
        "idzona": 6
      },
      {
        "name": "Belencito",
        "price": 14000,
        "idzona": 6
      },
      {
        "name": "El Salado",
        "price": 14000,
        "idzona": 6
      },
      {
        "name": "Eduardo Santos",
        "price": 15000,
        "idzona": 6
      },
      {
        "name": "Antonio Nariño",
        "price": 15000,
        "idzona": 6
      },
      {
        "name": "El Socorro",
        "price": 12000,
        "idzona": 6
      },
      {
        "name": "San Javier 1",
        "price": 12000,
        "idzona": 6
      },
      {
        "name": "San Javier 2",
        "price": 13000,
        "idzona": 6
      },
      {
        "name": "Loma de los Bernal",
        "price": 14000,
        "idzona": 6
      },
      {
        "name": "Juan XXIII",
        "price": 12000,
        "idzona": 6
      },
      {
        "name": "Santa Rosa de Lima",
        "price": 12000,
        "idzona": 6
      },
      {
        "name": "Metropolitano",
        "price": 16000,
        "idzona": 6
      },
      {
        "name": "Los Alcázares",
        "price": 16000,
        "idzona": 6
      },
      {
        "name": "Belén",
        "price": 16000,
        "idzona": 6
      },
      {
        "name": "San Germán",
        "price": 10000,
        "idzona": 7
      },
      {
        "name": "Palenque",
        "price": 13000,
        "idzona": 7
      },
      {
        "name": "Parque de Robledo",
        "price": 11000,
        "idzona": 7
      },
      {
        "name": "La Pilarica",
        "price": 11000,
        "idzona": 7
      },
      {
        "name": "Miramar",
        "price": 11000,
        "idzona": 7
      },
      {
        "name": "López de Mesa",
        "price": 12500,
        "idzona": 7
      },
      {
        "name": "Córdoba",
        "price": 12000,
        "idzona": 7
      },
      {
        "name": "El Diamante",
        "price": 10000,
        "idzona": 7
      },
      {
        "name": "Villa Flora",
        "price": 11500,
        "idzona": 7
      },
      {
        "name": "Bello Horizonte",
        "price": 11500,
        "idzona": 7
      },
      {
        "name": "Bosques de San Pablo",
        "price": 11500,
        "idzona": 7
      },
      {
        "name": "Aures 1",
        "price": 16000,
        "idzona": 7
      },
      {
        "name": "Aures 2",
        "price": 16000,
        "idzona": 7
      },
      {
        "name": "Monteclaro",
        "price": 12000,
        "idzona": 7
      },
      {
        "name": "Pajarito",
        "price": 12000,
        "idzona": 7
      },
      {
        "name": "Fuente Clara",
        "price": 11500,
        "idzona": 7
      },
      {
        "name": "El Curacho",
        "price": 12000,
        "idzona": 7
      },
      {
        "name": "Margaritas",
        "price": 12000,
        "idzona": 7
      },
      {
        "name": "Olaya Herrera",
        "price": 13000,
        "idzona": 7
      },
      {
        "name": "La Aurora",
        "price": 16000,
        "idzona": 7
      },
      {
        "name": "Altamira Territorio Robledo",
        "price": 14000,
        "idzona": 7
      },
      {
        "name": "La Iguaná",
        "price": 14000,
        "idzona": 7
      },
      {
        "name": "La Pilarica",
        "price": 14000,
        "idzona": 7
      },
      {
        "name": "Santa Catalina",
        "price": 12000,
        "idzona": 7
      },
      {
        "name": "Blanquizal",
        "price": 12000,
        "idzona": 7
      },
      {
        "name": "La Campiña",
        "price": 14000,
        "idzona": 7
      },
      {
        "name": "Miramar",
        "price": 14000,
        "idzona": 7
      },
      {
        "name": "Villa Hermosa",
        "price": 14000,
        "idzona": 8
      },
      {
        "name": "La Mansión",
        "price": 14000,
        "idzona": 8
      },
      {
        "name": "Astorga",
        "price": 12000,
        "idzona": 9
      },
      {
        "name": "Castropol",
        "price": 11000,
        "idzona": 9
      },
      {
        "name": "Manila",
        "price": 12000,
        "idzona": 9
      },
      {
        "name": "Patio Bonito",
        "price": 12000,
        "idzona": 9
      },
      {
        "name": "La Aguacatala",
        "price": 12000,
        "idzona": 9
      },
      {
        "name": "Santa María de Los Ángeles",
        "price": 14000,
        "idzona": 9
      },
      {
        "name": "El Diamante",
        "price": 14000,
        "idzona": 9
      },
      {
        "name": "Las Lomas 1",
        "price": 14000,
        "idzona": 9
      },
      {
        "name": "Las Lomas 2",
        "price": 14000,
        "idzona": 9
      },
      {
        "name": "Altos del Poblado",
        "price": 15000,
        "idzona": 9
      },
      {
        "name": "El Tesoro",
        "price": 15000,
        "idzona": 9
      },
      {
        "name": "Los Naranjos",
        "price": 15000,
        "idzona": 9
      },
      {
        "name": "El Castillo",
        "price": 15000,
        "idzona": 9
      },
      {
        "name": "Alejandría",
        "price": 14000,
        "idzona": 9
      },
      {
        "name": "La Florida",
        "price": 12000,
        "idzona": 9
      },
      {
        "name": "Loma de San Julián",
        "price": 14000,
        "idzona": 9
      },
      {
        "name": "Ciudad del Río",
        "price": 10000,
        "idzona": 9
      },
      {
        "name": "La Calera",
        "price": 14000,
        "idzona": 9
      },
      {
        "name": "Provenza",
        "price": 12000,
        "idzona": 9
      },
      {
        "name": "Tenche",
        "price": 7000,
        "idzona": 10
      },
      {
        "name": "Trinidad",
        "price": 7000,
        "idzona": 10
      },
      {
        "name": "Santa Fe",
        "price": 7000,
        "idzona": 10
      },
      {
        "name": "Campo Amor",
        "price": 8000,
        "idzona": 10
      },
      {
        "name": "Cristo Rey",
        "price": 8500,
        "idzona": 10
      },
      {
        "name": "Guayabal",
        "price": 9000,
        "idzona": 10
      },
      {
        "name": "La Colina",
        "price": 10000,
        "idzona": 10
      },
      {
        "name": "Ecoparque Cerro Nutibara",
        "price": 8500,
        "idzona": 10
      },
      {
        "name": "Nuevo Guayabal",
        "price": 9000,
        "idzona": 10
      },
      {
        "name": "CAICEDO",
        "price": 12000,
        "idzona": 11
      },
      {
        "name": "ALEJANDRO ECHAVARRIA",
        "price": 14000,
        "idzona": 11
      },
      {
        "name": "MIRAFLORES",
        "price": 12000,
        "idzona": 11
      },
      {
        "name": "GERONA",
        "price": 12000,
        "idzona": 11
      },
      {
        "name": "EL SALVADOR",
        "price": 11000,
        "idzona": 11
      },
      {
        "name": "BOMBONA 2",
        "price": 12000,
        "idzona": 11
      },
      {
        "name": "LORETO",
        "price": 19000,
        "idzona": 11
      },
      {
        "name": "CATALUÑA",
        "price": 14000,
        "idzona": 11
      },
      {
        "name": "LOMA DEL INDIO",
        "price": 12000,
        "idzona": 11
      },
      {
        "name": "LA MILAGROSA",
        "price": 12000,
        "idzona": 11
      },
      {
        "name": "BARRIO DE JESUS",
        "price": 15000,
        "idzona": 11
      },
      {
        "name": "JUAN PABLOII",
        "price": 15000,
        "idzona": 11
      },
      {
        "name": "DE MARZO",
        "price": 14000,
        "idzona": 11
      },
      {
        "name": "Los Ángeles",
        "price": 11000,
        "idzona": 12
      },
      {
        "name": "Prado",
        "price": 11000,
        "idzona": 12
      },
      {
        "name": "Jesús Nazareno",
        "price": 11000,
        "idzona": 12
      },
      {
        "name": "El Chagualo",
        "price": 14000,
        "idzona": 12
      },
      {
        "name": "Estación Villa",
        "price": 14000,
        "idzona": 12
      },
      {
        "name": "San Benito",
        "price": 9000,
        "idzona": 12
      },
      {
        "name": "Guayabal",
        "price": 9000,
        "idzona": 12
      },
      {
        "name": "Corazón de Jesús (Barrio Triste)",
        "price": 9000,
        "idzona": 12
      },
      {
        "name": "Villa Nueva",
        "price": 10000,
        "idzona": 12
      },
      {
        "name": "La Candelaria",
        "price": 9000,
        "idzona": 12
      },
      {
        "name": "Calle Nueva (Bayadera)",
        "price": 9000,
        "idzona": 12
      },
      {
        "name": "Bomboná 1",
        "price": 11000,
        "idzona": 12
      },
      {
        "name": "Bomboná 2",
        "price": 11000,
        "idzona": 12
      },
      {
        "name": "Las Palmas",
        "price": 11000,
        "idzona": 12
      },
      {
        "name": "Boston",
        "price": 9000,
        "idzona": 12
      },
      {
        "name": "Colón",
        "price": 9000,
        "idzona": 12
      },
      {
        "name": "San Diego",
        "price": 10000,
        "idzona": 12
      },
      {
        "name": "Perpetuo Socorro",
        "price": 10000,
        "idzona": 12
      },
      {
        "name": "Sevilla",
        "price": 12000,
        "idzona": 12
      },
      {
        "name": "Alpujarra",
        "price": 9000,
        "idzona": 12
      },
      {
        "name": "Laureles",
        "price": 6000,
        "idzona": 13
      },
      {
        "name": "Lorena",
        "price": 6000,
        "idzona": 13
      },
      {
        "name": "San Joaquín",
        "price": 6000,
        "idzona": 13
      },
      {
        "name": "Las Acacias",
        "price": 6000,
        "idzona": 13
      },
      {
        "name": "Los Conquistadores",
        "price": 6000,
        "idzona": 13
      },
      {
        "name": "La Castellana",
        "price": 7000,
        "idzona": 13
      },
      {
        "name": "Florencia Nueva",
        "price": 7000,
        "idzona": 13
      },
      {
        "name": "Naranjal",
        "price": 7000,
        "idzona": 13
      },
      {
        "name": "El Velódromo",
        "price": 7000,
        "idzona": 13
      },
      {
        "name": "Estadio",
        "price": 7500,
        "idzona": 13
      },
      {
        "name": "Los Colores",
        "price": 7500,
        "idzona": 13
      },
      {
        "name": "Laureles Brigada",
        "price": 3500,
        "idzona": 13
      },
      {
        "name": "Carlos E Restrepo",
        "price": 3500,
        "idzona": 13
      },
      {
        "name": "Suramericana",
        "price": 3000,
        "idzona": 13
      },
      {
        "name": "El Nogal Los Almendros",
        "price": 6000,
        "idzona": 14
      },
      {
        "name": "Nueva Villa de Aburrá",
        "price": 6000,
        "idzona": 14
      },
      {
        "name": "Las Mercedes",
        "price": 7000,
        "idzona": 14
      },
      {
        "name": "Los Alpes",
        "price": 7000,
        "idzona": 14
      },
      {
        "name": "Los Molinos",
        "price": 7000,
        "idzona": 14
      },
      {
        "name": "Rosales",
        "price": 5000,
        "idzona": 14
      },
      {
        "name": "Granada",
        "price": 6000,
        "idzona": 14
      },
      {
        "name": "Fatima",
        "price": 7000,
        "idzona": 14
      },
      {
        "name": "Cerro Nutibara (Autopista Sur)",
        "price": 8500,
        "idzona": 14
      },
      {
        "name": "Cerro Nutibara (Puente Falsa)",
        "price": 7000,
        "idzona": 14
      },
      {
        "name": "Altavista",
        "price": 7000,
        "idzona": 14
      },
      {
        "name": "San Bernardo",
        "price": 7000,
        "idzona": 14
      },
      {
        "name": "La Gloria",
        "price": 7000,
        "idzona": 14
      },
      {
        "name": "Las Playas",
        "price": 8000,
        "idzona": 14
      },
      {
        "name": "Loma de Los Bernal",
        "price": 8000,
        "idzona": 14
      },
      {
        "name": "Diego Echavarria",
        "price": 8000,
        "idzona": 14
      },
      {
        "name": "Belén Rincón",
        "price": 8000,
        "idzona": 14
      },
      {
        "name": "El Rodeo",
        "price": 10000,
        "idzona": 14
      },
      {
        "name": "La Hondonada",
        "price": 10000,
        "idzona": 14
      },
      {
        "name": "Belen Las Playas",
        "price": 7000,
        "idzona": 14
      },
      {
        "name": "Belen Aliadas",
        "price": 7000,
        "idzona": 14
      },
      {
        "name": "Milla de Oro",
        "price": 8000,
        "idzona": 14
      },
      {
        "name": "La Nubia",
        "price": 8500,
        "idzona": 14
      },
      {
        "name": "La Loma",
        "price": 8500,
        "idzona": 14
      },
      {
        "name": "Arquería",
        "price": 8500,
        "idzona": 14
      },
      {
        "name": "Parque Belén",
        "price": 7000,
        "idzona": 14
      },
      {
        "name": "Manrique Oriental",
        "price": 15000,
        "idzona": 15
      },
      {
        "name": "Manrique Central",
        "price": 14000,
        "idzona": 15
      },
      {
        "name": "Aranjuez",
        "price": 13000,
        "idzona": 16
      },
      {
        "name": "Berlín",
        "price": 13000,
        "idzona": 16
      },
      {
        "name": "Palermo",
        "price": 14000,
        "idzona": 16
      },
      {
        "name": "La Piñuela",
        "price": 13000,
        "idzona": 16
      },
      {
        "name": "Las Esmeraldas",
        "price": 13000,
        "idzona": 16
      },
      {
        "name": "Campo Valdés 1",
        "price": 13000,
        "idzona": 16
      },
      {
        "name": "San Pedro",
        "price": 13000,
        "idzona": 16
      },
      {
        "name": "Miranda",
        "price": 13000,
        "idzona": 16
      },
      {
        "name": "Moravia",
        "price": 14000,
        "idzona": 16
      },
      {
        "name": "Los Álamos",
        "price": 14000,
        "idzona": 16
      },
      {
        "name": "Brasilia",
        "price": 13000,
        "idzona": 16
      },
      {
        "name": "Toscana",
        "price": 16000,
        "idzona": 17
      },
      {
        "name": "Las Brisas",
        "price": 15000,
        "idzona": 17
      },
      {
        "name": "Florencia",
        "price": 15000,
        "idzona": 17
      },
      {
        "name": "Toledo",
        "price": 14000,
        "idzona": 17
      },
      {
        "name": "Boyacá",
        "price": 15000,
        "idzona": 17
      },
      {
        "name": "Gibraltar",
        "price": 13000,
        "idzona": 17
      },
      {
        "name": "Belalcázar",
        "price": 12000,
        "idzona": 17
      },
      {
        "name": "Tricentenario",
        "price": 14000,
        "idzona": 17
      },
      {
        "name": "Castilla",
        "price": 15000,
        "idzona": 17
      },
      {
        "name": "Aures 2",
        "price": 14000,
        "idzona": 17
      },
      {
        "name": "Aures 1",
        "price": 15000,
        "idzona": 17
      },
      {
        "name": "Aures",
        "price": 14000,
        "idzona": 17
      },
      {
        "name": "El Progreso",
        "price": 11000,
        "idzona": 17
      },
      {
        "name": "Gabriel",
        "price": 11000,
        "idzona": 17
      },
      {
        "name": "Santander",
        "price": 15000,
        "idzona": 18
      },
      {
        "name": "Pedregal",
        "price": 15000,
        "idzona": 18
      },
      {
        "name": "Doce de Octubre",
        "price": 13000,
        "idzona": 18
      },
      {
        "name": "El Progreso",
        "price": 13000,
        "idzona": 18
      },
      {
        "name": "La Esperanza",
        "price": 12000,
        "idzona": 18
      },
      {
        "name": "Santa Margarita",
        "price": 12000,
        "idzona": 18
      },
      {
        "name": "Santa Teresita",
        "price": 8000,
        "idzona": 19
      },
      {
        "name": "Simón Bolívar",
        "price": 8000,
        "idzona": 19
      },
      {
        "name": "Santa Mónica",
        "price": 8000,
        "idzona": 19
      },
      {
        "name": "Cristo Rey",
        "price": 8000,
        "idzona": 19
      },
      {
        "name": "Campo Alegre",
        "price": 7500,
        "idzona": 19
      },
      {
        "name": "El Danubio",
        "price": 8000,
        "idzona": 19
      },
      {
        "name": "La América",
        "price": 9000,
        "idzona": 19
      },
      {
        "name": "Los Pinos",
        "price": 8000,
        "idzona": 19
      },
      {
        "name": "Santa Lucía",
        "price": 9000,
        "idzona": 19
      },
      {
        "name": "La Floresta",
        "price": 9000,
        "idzona": 19
      },
      {
        "name": "Calasanz Parte Alta",
        "price": 9000,
        "idzona": 19
      },
      {
        "name": "Ferrini",
        "price": 8000,
        "idzona": 19
      },
      {
        "name": "Calasanz Parte Baja",
        "price": 9000,
        "idzona": 19
      },
      {
        "name": "Lalinde Campestre",
        "price": 8500,
        "idzona": 19
      },
      {
        "name": "El Pesebre",
        "price": 8000,
        "idzona": 19
      },
      {
        "name": "Almería",
        "price": 9000,
        "idzona": 19
      },
      {
        "name": "Betania",
        "price": 8000,
        "idzona": 20
      },
      {
        "name": "El Corazón",
        "price": 11000,
        "idzona": 20
      },
      {
        "name": "Nuevos Conquistadores",
        "price": 10000,
        "idzona": 20
      },
      {
        "name": "Las Independencias",
        "price": 10000,
        "idzona": 20
      },
      {
        "name": "Belencito",
        "price": 11000,
        "idzona": 20
      },
      {
        "name": "El Salado",
        "price": 10000,
        "idzona": 20
      },
      {
        "name": "Antonio Nariño",
        "price": 9000,
        "idzona": 20
      },
      {
        "name": "El Socorro",
        "price": 11000,
        "idzona": 20
      },
      {
        "name": "San Javier 1",
        "price": 10000,
        "idzona": 20
      },
      {
        "name": "San Javier 2",
        "price": 9000,
        "idzona": 20
      },
      {
        "name": "San Javier 3",
        "price": 10000,
        "idzona": 20
      },
      {
        "name": "San Javier 4",
        "price": 10000,
        "idzona": 20
      },
      {
        "name": "Santa Rosa de Lima",
        "price": 9000,
        "idzona": 20
      },
      {
        "name": "Metropolitano",
        "price": 10000,
        "idzona": 20
      },
      {
        "name": "Las Playas",
        "price": 9000,
        "idzona": 20
      },
      {
        "name": "Juan 23",
        "price": 9000,
        "idzona": 20
      },
      {
        "name": "La Loma",
        "price": 9000,
        "idzona": 20
      },
      {
        "name": "San Germán",
        "price": 7000,
        "idzona": 21
      },
      {
        "name": "Palenque",
        "price": 8000,
        "idzona": 21
      },
      {
        "name": "Parque de Robledo",
        "price": 8000,
        "idzona": 21
      },
      {
        "name": "La Pilarica",
        "price": 8000,
        "idzona": 21
      },
      {
        "name": "La Isla",
        "price": 8000,
        "idzona": 21
      },
      {
        "name": "Latino",
        "price": 9000,
        "idzona": 21
      },
      {
        "name": "López de Mesa",
        "price": 9000,
        "idzona": 21
      },
      {
        "name": "Córdoba",
        "price": 9000,
        "idzona": 21
      },
      {
        "name": "El Diamante",
        "price": 9000,
        "idzona": 21
      },
      {
        "name": "Villa Flora",
        "price": 8000,
        "idzona": 21
      },
      {
        "name": "Bello Horizonte",
        "price": 8000,
        "idzona": 21
      },
      {
        "name": "Bosques de San Pablo",
        "price": 9000,
        "idzona": 21
      },
      {
        "name": "Aures 1",
        "price": 10000,
        "idzona": 21
      },
      {
        "name": "Aures 2",
        "price": 10000,
        "idzona": 21
      },
      {
        "name": "Monteclaro",
        "price": 11000,
        "idzona": 21
      },
      {
        "name": "Pajarito",
        "price": 9000,
        "idzona": 21
      },
      {
        "name": "Fuente Clara",
        "price": 12000,
        "idzona": 21
      },
      {
        "name": "La Cabañita",
        "price": 12000,
        "idzona": 21
      },
      {
        "name": "Margarita",
        "price": 12000,
        "idzona": 21
      },
      {
        "name": "Olaya Herrera",
        "price": 12000,
        "idzona": 21
      },
      {
        "name": "La Aurora",
        "price": 12000,
        "idzona": 21
      },
      {
        "name": "Sta. María Territorio Robledo",
        "price": 11000,
        "idzona": 21
      },
      {
        "name": "La Laguna",
        "price": 9000,
        "idzona": 21
      },
      {
        "name": "La Pilarica",
        "price": 10000,
        "idzona": 21
      },
      {
        "name": "Santa Catalina",
        "price": 9000,
        "idzona": 21
      },
      {
        "name": "El Diamante",
        "price": 10000,
        "idzona": 21
      },
      {
        "name": "La Campiña",
        "price": 10000,
        "idzona": 21
      },
      {
        "name": "Miramar",
        "price": 12000,
        "idzona": 21
      },
      {
        "name": "Brisas de Robledo",
        "price": 10000,
        "idzona": 21
      },
      {
        "name": "Villa Hermosa",
        "price": 13000,
        "idzona": 22
      },
      {
        "name": "La Mansión",
        "price": 12000,
        "idzona": 22
      },
      {
        "name": "Guayabal",
        "price": 12000,
        "idzona": 23
      },
      {
        "name": "Alejandro Echavarría",
        "price": 12000,
        "idzona": 23
      },
      {
        "name": "Miraflores",
        "price": 13000,
        "idzona": 23
      },
      {
        "name": "Gerona",
        "price": 13000,
        "idzona": 23
      },
      {
        "name": "El Salvador",
        "price": 13000,
        "idzona": 23
      },
      {
        "name": "Lorenzo",
        "price": 14000,
        "idzona": 23
      },
      {
        "name": "Cataluña",
        "price": 14000,
        "idzona": 23
      },
      {
        "name": "Loma del Indio",
        "price": 12000,
        "idzona": 23
      },
      {
        "name": "La Milagrosa",
        "price": 14000,
        "idzona": 23
      },
      {
        "name": "Barrio de Jesús",
        "price": 13000,
        "idzona": 23
      },
      {
        "name": "Juan Pablo II",
        "price": 15000,
        "idzona": 23
      },
      {
        "name": "30 de Marzo",
        "price": 14000,
        "idzona": 23
      },
      {
        "name": "Los Ángeles",
        "price": 12000,
        "idzona": 24
      },
      {
        "name": "Prado",
        "price": 12000,
        "idzona": 24
      },
      {
        "name": "Jesús Nazareno",
        "price": 12000,
        "idzona": 24
      },
      {
        "name": "El Chagualo",
        "price": 14000,
        "idzona": 24
      },
      {
        "name": "Estación Villa",
        "price": 14000,
        "idzona": 24
      },
      {
        "name": "San Benito",
        "price": 14000,
        "idzona": 24
      },
      {
        "name": "Sucre",
        "price": 14000,
        "idzona": 24
      },
      {
        "name": "Corazón de Jesús (Barrio Triste)",
        "price": 14000,
        "idzona": 24
      },
      {
        "name": "La Alpujarra",
        "price": 14000,
        "idzona": 24
      },
      {
        "name": "La Candelaria",
        "price": 14000,
        "idzona": 24
      },
      {
        "name": "Colón",
        "price": 14000,
        "idzona": 24
      },
      {
        "name": "Perpetuo Socorro",
        "price": 14000,
        "idzona": 24
      },
      {
        "name": "Sevilla",
        "price": 14000,
        "idzona": 24
      },
      {
        "name": "La Castellana",
        "price": 12000,
        "idzona": 25
      },
      {
        "name": "Florida Nueva",
        "price": 12000,
        "idzona": 25
      },
      {
        "name": "Naranjal",
        "price": 12000,
        "idzona": 25
      },
      {
        "name": "El Velódromo",
        "price": 12000,
        "idzona": 25
      },
      {
        "name": "Estadio",
        "price": 12000,
        "idzona": 25
      },
      {
        "name": "Los Colores",
        "price": 12000,
        "idzona": 25
      },
      {
        "name": "Laureles",
        "price": 14000,
        "idzona": 25
      },
      {
        "name": "Carlos Restrepo",
        "price": 14000,
        "idzona": 25
      },
      {
        "name": "Suramericana",
        "price": 14000,
        "idzona": 25
      },
      {
        "name": "Barrio Colombia",
        "price": 12000,
        "idzona": 26
      },
      {
        "name": "Villa Carlota",
        "price": 14000,
        "idzona": 26
      },
      {
        "name": "Astorga",
        "price": 15000,
        "idzona": 26
      },
      {
        "name": "Naranjo",
        "price": 14000,
        "idzona": 26
      },
      {
        "name": "Las Lomas",
        "price": 16000,
        "idzona": 26
      },
      {
        "name": "Poblado",
        "price": 17000,
        "idzona": 26
      },
      {
        "name": "El Tesoro",
        "price": 19000,
        "idzona": 26
      },
      {
        "name": "Los Naranjos",
        "price": 20000,
        "idzona": 26
      },
      {
        "name": "Las Vegas",
        "price": 21000,
        "idzona": 26
      },
      {
        "name": "El Poblado",
        "price": 20000,
        "idzona": 26
      },
      {
        "name": "Tenche",
        "price": 12000,
        "idzona": 27
      },
      {
        "name": "Trinidad",
        "price": 12000,
        "idzona": 27
      },
      {
        "name": "Santa Fe",
        "price": 12000,
        "idzona": 27
      },
      {
        "name": "Campo Amor",
        "price": 13000,
        "idzona": 27
      },
      {
        "name": "Cristo Rey",
        "price": 14000,
        "idzona": 27
      },
      {
        "name": "Guayabal",
        "price": 15000,
        "idzona": 27
      },
      {
        "name": "Belén",
        "price": 15000,
        "idzona": 27
      },
      {
        "name": "Aliadas",
        "price": 12000,
        "idzona": 27
      },
      {
        "name": "La Nubia",
        "price": 12000,
        "idzona": 27
      },
      {
        "name": "Alameda",
        "price": 12000,
        "idzona": 27
      },
      {
        "name": "Parque de Belén",
        "price": 16000,
        "idzona": 27
      },
      {
        "name": "El Nogal Los Almendros",
        "price": 16000,
        "idzona": 28
      },
      {
        "name": "Miravalle",
        "price": 16000,
        "idzona": 28
      },
      {
        "name": "Nueva Villa de Aburrá",
        "price": 14000,
        "idzona": 28
      },
      {
        "name": "Las Mercedes",
        "price": 15000,
        "idzona": 28
      },
      {
        "name": "Los Molinos",
        "price": 15000,
        "idzona": 28
      },
      {
        "name": "Los Alpes",
        "price": 15000,
        "idzona": 28
      },
      {
        "name": "Rosales",
        "price": 14000,
        "idzona": 28
      },
      {
        "name": "Granada",
        "price": 15000,
        "idzona": 28
      },
      {
        "name": "Fátima",
        "price": 16000,
        "idzona": 28
      },
      {
        "name": "Cerro Nutibara (Autopista Sur)",
        "price": 11000,
        "idzona": 28
      },
      {
        "name": "Cerro Nutibara (Pueblito Paisa)",
        "price": 11000,
        "idzona": 28
      },
      {
        "name": "Altavista",
        "price": 14000,
        "idzona": 28
      },
      {
        "name": "San Bernardo",
        "price": 14000,
        "idzona": 28
      },
      {
        "name": "La Gloria",
        "price": 14000,
        "idzona": 28
      },
      {
        "name": "Las Playas",
        "price": 15000,
        "idzona": 28
      },
      {
        "name": "La Palma",
        "price": 15000,
        "idzona": 28
      },
      {
        "name": "Diana Turbay",
        "price": 16000,
        "idzona": 28
      },
      {
        "name": "El Rincón",
        "price": 15000,
        "idzona": 28
      },
      {
        "name": "La Loma",
        "price": 14000,
        "idzona": 28
      },
      {
        "name": "La Honda",
        "price": 14000,
        "idzona": 28
      },
      {
        "name": "Belén Palomas",
        "price": 14000,
        "idzona": 28
      },
      {
        "name": "Medellín",
        "price": 15000,
        "idzona": 28
      },
      {
        "name": "Manrique Oriental",
        "price": 12000,
        "idzona": 29
      },
      {
        "name": "Manrique Central",
        "price": 12000,
        "idzona": 29
      },
      {
        "name": "Aranjuez",
        "price": 11000,
        "idzona": 30
      },
      {
        "name": "Berlín",
        "price": 11000,
        "idzona": 30
      },
      {
        "name": "Palermo",
        "price": 11000,
        "idzona": 30
      },
      {
        "name": "La Piñuela",
        "price": 11000,
        "idzona": 30
      },
      {
        "name": "Las Esmeraldas",
        "price": 11000,
        "idzona": 30
      },
      {
        "name": "Campo Valdés 1",
        "price": 11000,
        "idzona": 30
      },
      {
        "name": "San Pedro",
        "price": 11000,
        "idzona": 30
      },
      {
        "name": "Miranda",
        "price": 11000,
        "idzona": 30
      },
      {
        "name": "Moravia",
        "price": 11000,
        "idzona": 30
      },
      {
        "name": "Los Álamos",
        "price": 11000,
        "idzona": 30
      },
      {
        "name": "Brasilia",
        "price": 11000,
        "idzona": 30
      },
      {
        "name": "Toscana",
        "price": 15000,
        "idzona": 31
      },
      {
        "name": "Las Brisas",
        "price": 15000,
        "idzona": 31
      },
      {
        "name": "Florencia",
        "price": 13000,
        "idzona": 31
      },
      {
        "name": "Tejelo",
        "price": 14000,
        "idzona": 31
      },
      {
        "name": "Boyacá",
        "price": 14000,
        "idzona": 31
      },
      {
        "name": "Girardot",
        "price": 14000,
        "idzona": 31
      },
      {
        "name": "Belalcázar",
        "price": 12000,
        "idzona": 31
      },
      {
        "name": "Tricentenario",
        "price": 13000,
        "idzona": 31
      },
      {
        "name": "Castilla",
        "price": 12000,
        "idzona": 31
      },
      {
        "name": "Alfonso López",
        "price": 12000,
        "idzona": 31
      },
      {
        "name": "Francisco Antonio Zea",
        "price": 11000,
        "idzona": 31
      },
      {
        "name": "El Progreso",
        "price": 11000,
        "idzona": 31
      },
      {
        "name": "Caribe",
        "price": 11000,
        "idzona": 31
      },
      {
        "name": "Santander",
        "price": 14000,
        "idzona": 32
      },
      {
        "name": "Pedregal",
        "price": 14000,
        "idzona": 32
      },
      {
        "name": "Doce de Octubre",
        "price": 14000,
        "idzona": 32
      },
      {
        "name": "El Progreso 2",
        "price": 14000,
        "idzona": 32
      },
      {
        "name": "El Triunfo",
        "price": 14000,
        "idzona": 32
      },
      {
        "name": "Mirador del 12",
        "price": 14000,
        "idzona": 32
      },
      {
        "name": "Picacho",
        "price": 14000,
        "idzona": 32
      },
      {
        "name": "San Martín de Porres",
        "price": 11000,
        "idzona": 32
      },
      {
        "name": "Kennedy",
        "price": 11000,
        "idzona": 32
      },
      {
        "name": "La Esperanza",
        "price": 15000,
        "idzona": 32
      },
      {
        "name": "Santa Teresita",
        "price": 9000,
        "idzona": 33
      },
      {
        "name": "Simón Bolívar",
        "price": 9000,
        "idzona": 33
      },
      {
        "name": "Santa Mónica",
        "price": 8000,
        "idzona": 33
      },
      {
        "name": "Cristóbal",
        "price": 8000,
        "idzona": 33
      },
      {
        "name": "Campo Alegre",
        "price": 7500,
        "idzona": 33
      },
      {
        "name": "El Danubio",
        "price": 7000,
        "idzona": 33
      },
      {
        "name": "La América",
        "price": 6000,
        "idzona": 33
      },
      {
        "name": "Los Pinos",
        "price": 6000,
        "idzona": 33
      },
      {
        "name": "Santa Lucía",
        "price": 6000,
        "idzona": 33
      },
      {
        "name": "Floresta",
        "price": 6000,
        "idzona": 33
      },
      {
        "name": "Calasanz Parte Alta",
        "price": 7000,
        "idzona": 33
      },
      {
        "name": "Ferrini",
        "price": 6000,
        "idzona": 33
      },
      {
        "name": "Calasanz Parte Baja",
        "price": 7000,
        "idzona": 33
      },
      {
        "name": "Laureles Campestre",
        "price": 8500,
        "idzona": 33
      },
      {
        "name": "El Pesebre",
        "price": 5000,
        "idzona": 33
      },
      {
        "name": "Almería",
        "price": 9000,
        "idzona": 33
      },
      {
        "name": "Belén",
        "price": 12000,
        "idzona": 34
      },
      {
        "name": "Betania",
        "price": 9000,
        "idzona": 34
      },
      {
        "name": "El Corazón",
        "price": 10000,
        "idzona": 34
      },
      {
        "name": "Nuevos Conquistadores",
        "price": 12000,
        "idzona": 34
      },
      {
        "name": "Las Independencias",
        "price": 10000,
        "idzona": 34
      },
      {
        "name": "El Socorro",
        "price": 12000,
        "idzona": 34
      },
      {
        "name": "Eduardo Santos",
        "price": 12000,
        "idzona": 34
      },
      {
        "name": "Antonio Nariño",
        "price": 9000,
        "idzona": 34
      },
      {
        "name": "El Salado",
        "price": 10000,
        "idzona": 34
      },
      {
        "name": "Metropolitano",
        "price": 14000,
        "idzona": 34
      },
      {
        "name": "Veinte de Julio",
        "price": 11000,
        "idzona": 34
      },
      {
        "name": "San Germán",
        "price": 7000,
        "idzona": 35
      },
      {
        "name": "Palenque",
        "price": 8000,
        "idzona": 35
      },
      {
        "name": "Parque de Robledo",
        "price": 9000,
        "idzona": 35
      },
      {
        "name": "La Pilarica",
        "price": 9000,
        "idzona": 35
      },
      {
        "name": "Altamira",
        "price": 9000,
        "idzona": 35
      },
      {
        "name": "López de Mesa",
        "price": 9000,
        "idzona": 35
      },
      {
        "name": "Córdoba",
        "price": 10000,
        "idzona": 35
      },
      {
        "name": "El Diamante",
        "price": 8000,
        "idzona": 35
      },
      {
        "name": "Villa Flora",
        "price": 8000,
        "idzona": 35
      },
      {
        "name": "Bello Horizonte",
        "price": 9000,
        "idzona": 35
      },
      {
        "name": "Bosques de San Pablo",
        "price": 11000,
        "idzona": 35
      },
      {
        "name": "Aures 1",
        "price": 10000,
        "idzona": 35
      },
      {
        "name": "Aures 2",
        "price": 11000,
        "idzona": 35
      },
      {
        "name": "Monteclaro",
        "price": 10000,
        "idzona": 35
      },
      {
        "name": "Pajarito",
        "price": 12000,
        "idzona": 35
      },
      {
        "name": "Fuente Clara",
        "price": 10000,
        "idzona": 35
      },
      {
        "name": "La Aurora",
        "price": 11000,
        "idzona": 35
      },
      {
        "name": "La Pola",
        "price": 10000,
        "idzona": 35
      },
      {
        "name": "Santa Catalina",
        "price": 10000,
        "idzona": 35
      },
      {
        "name": "Blanquizal",
        "price": 9000,
        "idzona": 35
      },
      {
        "name": "La Campiña",
        "price": 9000,
        "idzona": 35
      },
      {
        "name": "Miramar",
        "price": 12000,
        "idzona": 35
      },
      {
        "name": "Villa Hermosa",
        "price": 10000,
        "idzona": 36
      },
      {
        "name": "La Mansión",
        "price": 11000,
        "idzona": 36
      },
      {
        "name": "Quito",
        "price": 11000,
        "idzona": 37
      },
      {
        "name": "Alejandro Echavarría",
        "price": 11000,
        "idzona": 37
      },
      {
        "name": "Miraflores",
        "price": 11000,
        "idzona": 37
      },
      {
        "name": "Gerona",
        "price": 11000,
        "idzona": 37
      },
      {
        "name": "Los Cerros El Salvador",
        "price": 12000,
        "idzona": 37
      },
      {
        "name": "Bomboná 2",
        "price": 11000,
        "idzona": 37
      },
      {
        "name": "Llanaditas",
        "price": 11000,
        "idzona": 37
      },
      {
        "name": "Cataluña",
        "price": 11000,
        "idzona": 37
      },
      {
        "name": "Loma del Indio",
        "price": 11000,
        "idzona": 37
      },
      {
        "name": "Juan Pablo II",
        "price": 12000,
        "idzona": 37
      },
      {
        "name": "Los Ángeles",
        "price": 14000,
        "idzona": 38
      },
      {
        "name": "Prado",
        "price": 14000,
        "idzona": 38
      },
      {
        "name": "Estación Villa",
        "price": 14000,
        "idzona": 38
      },
      {
        "name": "San Benito",
        "price": 14000,
        "idzona": 38
      },
      {
        "name": "Sucre",
        "price": 14000,
        "idzona": 38
      },
      {
        "name": "Perpetuo Socorro",
        "price": 14000,
        "idzona": 38
      },
      {
        "name": "La Castellana",
        "price": 8000,
        "idzona": 39
      },
      {
        "name": "Florida Nueva",
        "price": 8000,
        "idzona": 39
      },
      {
        "name": "Los Colores",
        "price": 8000,
        "idzona": 39
      },
      {
        "name": "Carlos E Restrepo",
        "price": 8000,
        "idzona": 39
      },
      {
        "name": "Cerro Nutibara (Autopista Sur)",
        "price": 9000,
        "idzona": 40
      },
      {
        "name": "Cerro Nutibara (Pueblito Paisa)",
        "price": 9000,
        "idzona": 40
      },
      {
        "name": "Altavista",
        "price": 9000,
        "idzona": 40
      },
      {
        "name": "San Bernardo",
        "price": 9000,
        "idzona": 40
      },
      {
        "name": "La Gloria",
        "price": 9000,
        "idzona": 40
      },
      {
        "name": "Las Playas",
        "price": 9000,
        "idzona": 40
      },
      {
        "name": "Diego Echevarría",
        "price": 9000,
        "idzona": 40
      },
      {
        "name": "El Rincón",
        "price": 11000,
        "idzona": 40
      },
      {
        "name": "La Hondonada",
        "price": 9000,
        "idzona": 40
      },
      {
        "name": "Malibú",
        "price": 9000,
        "idzona": 40
      },
      {
        "name": "Tenche",
        "price": 12000,
        "idzona": 41
      },
      {
        "name": "Trinidad",
        "price": 12000,
        "idzona": 41
      },
      {
        "name": "Santa Fe",
        "price": 10000,
        "idzona": 41
      },
      {
        "name": "Campo Amor",
        "price": 12000,
        "idzona": 41
      },
      {
        "name": "Cristo Rey",
        "price": 15000,
        "idzona": 41
      },
      {
        "name": "La Colina",
        "price": 12000,
        "idzona": 41
      },
      {
        "name": "Barrio Colombia",
        "price": 13000,
        "idzona": 42
      },
      {
        "name": "Villa Carlota",
        "price": 14000,
        "idzona": 42
      },
      {
        "name": "Astorga",
        "price": 15000,
        "idzona": 42
      },
      {
        "name": "Patio Bonito",
        "price": 16000,
        "idzona": 42
      },
      {
        "name": "La Aguacatala",
        "price": 16000,
        "idzona": 42
      },
      {
        "name": "Provenza",
        "price": 16000,
        "idzona": 42
      },
      {
        "name": "San Lucas",
        "price": 16000,
        "idzona": 42
      },
      {
        "name": "Manrique Oriental",
        "price": 15000,
        "idzona": 43
      },
      {
        "name": "Manrique Central",
        "price": 15000,
        "idzona": 43
      },
      {
        "name": "Aranjuez",
        "price": 15000,
        "idzona": 44
      },
      {
        "name": "Berlín",
        "price": 15000,
        "idzona": 44
      },
      {
        "name": "Palermo",
        "price": 14000,
        "idzona": 44
      },
      {
        "name": "La Piñuela",
        "price": 15000,
        "idzona": 44
      },
      {
        "name": "Las Esmeraldas",
        "price": 14000,
        "idzona": 44
      },
      {
        "name": "Campo Valdés 1",
        "price": 14000,
        "idzona": 44
      },
      {
        "name": "San Pedro",
        "price": 11000,
        "idzona": 44
      },
      {
        "name": "Miranda",
        "price": 14000,
        "idzona": 44
      },
      {
        "name": "Moravia",
        "price": 14000,
        "idzona": 44
      },
      {
        "name": "Los Álamos",
        "price": 14000,
        "idzona": 44
      },
      {
        "name": "Brasilia",
        "price": 14000,
        "idzona": 44
      },
      {
        "name": "Toscana",
        "price": 15000,
        "idzona": 45
      },
      {
        "name": "Las Brisas",
        "price": 15000,
        "idzona": 45
      },
      {
        "name": "Florencia",
        "price": 15000,
        "idzona": 45
      },
      {
        "name": "Tejelo",
        "price": 14000,
        "idzona": 45
      },
      {
        "name": "Boyacá",
        "price": 15000,
        "idzona": 45
      },
      {
        "name": "Girardot",
        "price": 15000,
        "idzona": 45
      },
      {
        "name": "Belalcázar",
        "price": 15000,
        "idzona": 45
      },
      {
        "name": "Tricentenario",
        "price": 15000,
        "idzona": 45
      },
      {
        "name": "Castilla",
        "price": 15000,
        "idzona": 45
      },
      {
        "name": "Alfonso Lopez",
        "price": 13000,
        "idzona": 45
      },
      {
        "name": "Francisco Antonio Zea",
        "price": 13000,
        "idzona": 45
      },
      {
        "name": "El Progreso",
        "price": 12000,
        "idzona": 45
      },
      {
        "name": "Caribe",
        "price": 12000,
        "idzona": 45
      },
      {
        "name": "Santander",
        "price": 14000,
        "idzona": 46
      },
      {
        "name": "Pedregal",
        "price": 15000,
        "idzona": 46
      },
      {
        "name": "Doce de Octubre",
        "price": 15000,
        "idzona": 46
      },
      {
        "name": "El Progreso 2",
        "price": 15000,
        "idzona": 46
      },
      {
        "name": "El Triunfo",
        "price": 16000,
        "idzona": 46
      },
      {
        "name": "Mirador del 12",
        "price": 16000,
        "idzona": 46
      },
      {
        "name": "Picacho",
        "price": 16000,
        "idzona": 46
      },
      {
        "name": "San Martín de Porres",
        "price": 15000,
        "idzona": 46
      },
      {
        "name": "Kennedy",
        "price": 16000,
        "idzona": 46
      },
      {
        "name": "La Esperanza",
        "price": 13000,
        "idzona": 46
      },
      {
        "name": "Santa Teresita",
        "price": 7000,
        "idzona": 47
      },
      {
        "name": "Simón Bolívar",
        "price": 6500,
        "idzona": 47
      },
      {
        "name": "Santa Mónica",
        "price": 8000,
        "idzona": 47
      },
      {
        "name": "Cristóbal",
        "price": 7000,
        "idzona": 47
      },
      {
        "name": "Campo Alegre",
        "price": 7500,
        "idzona": 47
      },
      {
        "name": "El Danubio",
        "price": 7000,
        "idzona": 47
      },
      {
        "name": "La América",
        "price": 7500,
        "idzona": 47
      },
      {
        "name": "Los Pinos",
        "price": 7000,
        "idzona": 47
      },
      {
        "name": "Santa Lucía",
        "price": 7500,
        "idzona": 47
      },
      {
        "name": "Florencia",
        "price": 7000,
        "idzona": 47
      },
      {
        "name": "Calasanz Parte Alta",
        "price": 7000,
        "idzona": 47
      },
      {
        "name": "Ferrini",
        "price": 7500,
        "idzona": 47
      },
      {
        "name": "Calasanz Parte Baja",
        "price": 7000,
        "idzona": 47
      },
      {
        "name": "Laureles Campestre",
        "price": 7500,
        "idzona": 47
      },
      {
        "name": "El Pesebre",
        "price": 9000,
        "idzona": 47
      },
      {
        "name": "Almería",
        "price": 9000,
        "idzona": 47
      },
      {
        "name": "Betania",
        "price": 9000,
        "idzona": 48
      },
      {
        "name": "El Corazón",
        "price": 10000,
        "idzona": 48
      },
      {
        "name": "Nuevos Conquistadores",
        "price": 11000,
        "idzona": 48
      },
      {
        "name": "Las Independencias",
        "price": 11000,
        "idzona": 48
      },
      {
        "name": "Belencito",
        "price": 11000,
        "idzona": 48
      },
      {
        "name": "El Salado",
        "price": 12000,
        "idzona": 48
      },
      {
        "name": "Eduardo Santos",
        "price": 12000,
        "idzona": 48
      },
      {
        "name": "Antonio Nariño",
        "price": 11000,
        "idzona": 48
      },
      {
        "name": "El Socorro",
        "price": 12000,
        "idzona": 48
      },
      {
        "name": "San Javier 1",
        "price": 11000,
        "idzona": 48
      },
      {
        "name": "San Javier 2",
        "price": 12000,
        "idzona": 48
      },
      {
        "name": "La Pradera",
        "price": 12000,
        "idzona": 48
      },
      {
        "name": "Juan XXIII",
        "price": 12000,
        "idzona": 48
      },
      {
        "name": "Santa Rosa de Lima",
        "price": 12000,
        "idzona": 48
      },
      {
        "name": "Metropolitano",
        "price": 12000,
        "idzona": 48
      },
      {
        "name": "Los Alcazares",
        "price": 12000,
        "idzona": 48
      },
      {
        "name": "La Loma",
        "price": 12000,
        "idzona": 48
      },
      {
        "name": "El Diviso",
        "price": 12000,
        "idzona": 48
      },
      {
        "name": "San Germán",
        "price": 9000,
        "idzona": 49
      },
      {
        "name": "Palenque",
        "price": 11000,
        "idzona": 49
      },
      {
        "name": "Parque de Robledo",
        "price": 9000,
        "idzona": 49
      },
      {
        "name": "La Pilarica",
        "price": 9000,
        "idzona": 49
      },
      {
        "name": "La Campiña",
        "price": 14000,
        "idzona": 49
      },
      {
        "name": "El Diamante",
        "price": 14000,
        "idzona": 49
      },
      {
        "name": "Villa Flora",
        "price": 14000,
        "idzona": 49
      },
      {
        "name": "Bello Horizonte",
        "price": 14000,
        "idzona": 49
      },
      {
        "name": "Bosques de San Pablo",
        "price": 14000,
        "idzona": 49
      },
      {
        "name": "Aures 1",
        "price": 11000,
        "idzona": 49
      },
      {
        "name": "Aures 2",
        "price": 11000,
        "idzona": 49
      },
      {
        "name": "Monteclaro",
        "price": 14000,
        "idzona": 49
      },
      {
        "name": "Pajarito",
        "price": 12000,
        "idzona": 49
      },
      {
        "name": "Fuente Clara",
        "price": 14000,
        "idzona": 49
      },
      {
        "name": "El Cachimbo",
        "price": 12000,
        "idzona": 49
      },
      {
        "name": "Margarita",
        "price": 12000,
        "idzona": 49
      },
      {
        "name": "Olaya Herrera",
        "price": 14000,
        "idzona": 49
      },
      {
        "name": "La Aurora",
        "price": 14000,
        "idzona": 49
      },
      {
        "name": "Sta. María Territorio Robledo",
        "price": 12000,
        "idzona": 49
      },
      {
        "name": "La Laguna",
        "price": 14000,
        "idzona": 49
      },
      {
        "name": "La Pola",
        "price": 9000,
        "idzona": 49
      },
      {
        "name": "Santa Catalina",
        "price": 10000,
        "idzona": 49
      },
      {
        "name": "Blanquizal",
        "price": 9000,
        "idzona": 49
      },
      {
        "name": "La Campiña",
        "price": 14000,
        "idzona": 49
      },
      {
        "name": "Miramar",
        "price": 14000,
        "idzona": 49
      },
      {
        "name": "Villa Hermosa",
        "price": 14000,
        "idzona": 50
      },
      {
        "name": "La Mansión",
        "price": 14000,
        "idzona": 50
      },
      {
        "name": "Barrio Colombia",
        "price": 13000,
        "idzona": 51
      },
      {
        "name": "Villa Carlota",
        "price": 14000,
        "idzona": 51
      },
      {
        "name": "Castropol",
        "price": 14000,
        "idzona": 51
      },
      {
        "name": "Manila",
        "price": 15000,
        "idzona": 51
      },
      {
        "name": "Astorga",
        "price": 15000,
        "idzona": 51
      },
      {
        "name": "Patio Bonito",
        "price": 16000,
        "idzona": 51
      },
      {
        "name": "La Aguacatala",
        "price": 16000,
        "idzona": 51
      },
      {
        "name": "Santa María de los Ángeles",
        "price": 17000,
        "idzona": 51
      },
      {
        "name": "El Diamante",
        "price": 14000,
        "idzona": 51
      },
      {
        "name": "San Lucas",
        "price": 14000,
        "idzona": 51
      },
      {
        "name": "Las Lomas 1",
        "price": 14000,
        "idzona": 51
      },
      {
        "name": "Las Lomas 2",
        "price": 14000,
        "idzona": 51
      },
      {
        "name": "Altos del Poblado",
        "price": 15000,
        "idzona": 51
      },
      {
        "name": "El Tesoro",
        "price": 21000,
        "idzona": 51
      },
      {
        "name": "Los Naranjos",
        "price": 22000,
        "idzona": 51
      },
      {
        "name": "Los Balsos 1",
        "price": 19000,
        "idzona": 51
      },
      {
        "name": "Los Balsos 2",
        "price": 19000,
        "idzona": 51
      },
      {
        "name": "El Castillo",
        "price": 19000,
        "idzona": 51
      },
      {
        "name": "La Florida",
        "price": 12000,
        "idzona": 51
      },
      {
        "name": "Alejandría",
        "price": 17000,
        "idzona": 51
      },
      {
        "name": "Loma San Julián",
        "price": 13000,
        "idzona": 51
      },
      {
        "name": "Ciudad del Río",
        "price": 12000,
        "idzona": 51
      },
      {
        "name": "La Calera",
        "price": 22000,
        "idzona": 51
      },
      {
        "name": "Caicedo",
        "price": 11000,
        "idzona": 52
      },
      {
        "name": "Alejandro Echavarría",
        "price": 11000,
        "idzona": 52
      },
      {
        "name": "Miraflores",
        "price": 14000,
        "idzona": 52
      },
      {
        "name": "Gerona",
        "price": 11000,
        "idzona": 52
      },
      {
        "name": "El Salvador",
        "price": 9000,
        "idzona": 52
      },
      {
        "name": "Boston 2",
        "price": 9000,
        "idzona": 52
      },
      {
        "name": "Loreto",
        "price": 9000,
        "idzona": 52
      },
      {
        "name": "Cataluña",
        "price": 9000,
        "idzona": 52
      },
      {
        "name": "Loma del Indio",
        "price": 12000,
        "idzona": 52
      },
      {
        "name": "La Milagrosa",
        "price": 11000,
        "idzona": 52
      },
      {
        "name": "Barrios de Jesús",
        "price": 12000,
        "idzona": 52
      },
      {
        "name": "Juan Pablo II",
        "price": 9000,
        "idzona": 52
      },
      {
        "name": "30 de Marzo",
        "price": 11000,
        "idzona": 52
      },
      {
        "name": "Los Ángeles",
        "price": 12000,
        "idzona": 53
      },
      {
        "name": "Prado",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "Jesús Nazareno",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "El Chagualo",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "Estación Villa",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "San Benito",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "Guayaquil",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "Corazón de Jesús",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "La Alpujarra",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "La Candelaria",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "Calle Nueva",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "Bomboná 1",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "Bomboná 2",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "Las Palmas",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "Colón",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "San Diego",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "Perpetuo Socorro",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "Sevilla",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "Alpujarra",
        "price": 9000,
        "idzona": 53
      },
      {
        "name": "La Castellana",
        "price": 8000,
        "idzona": 54
      },
      {
        "name": "Florida Nueva",
        "price": 8000,
        "idzona": 54
      },
      {
        "name": "Naranjal",
        "price": 8000,
        "idzona": 54
      },
      {
        "name": "El Velódromo",
        "price": 8000,
        "idzona": 54
      },
      {
        "name": "Estadio",
        "price": 8000,
        "idzona": 54
      },
      {
        "name": "Los Colores",
        "price": 8000,
        "idzona": 54
      },
      {
        "name": "La Cuarta Brigada",
        "price": 8000,
        "idzona": 54
      },
      {
        "name": "Carlos E. Restrepo",
        "price": 8000,
        "idzona": 54
      },
      {
        "name": "Suramericana",
        "price": 8000,
        "idzona": 54
      },
      {
        "name": "El Nogal Los Almendros",
        "price": 8000,
        "idzona": 55
      },
      {
        "name": "Miravalle",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Nuevo Villa de Aburrá",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Las Mercedes",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Los Molinos",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Los Alpes",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Rosales",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Granada",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Fátima",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Cerro Nutibara",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Cerro Nutibara (Autopista Sur)",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Altavista",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "San Bernardo",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "La Gloria",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Las Playas",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Loma de Los Bernal",
        "price": 11000,
        "idzona": 55
      },
      {
        "name": "Diego Echavarría",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "El Rincón",
        "price": 11000,
        "idzona": 55
      },
      {
        "name": "La Hondonada",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Belén Palmas",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Malibú",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Aliadas",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "La Nubia",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Alameda",
        "price": 9000,
        "idzona": 55
      },
      {
        "name": "Parque de Belén",
        "price": 8000,
        "idzona": 55
      },
      {
        "name": "Tenche",
        "price": 9000,
        "idzona": 56
      },
      {
        "name": "Trinidad",
        "price": 9000,
        "idzona": 56
      },
      {
        "name": "Santa Fe",
        "price": 9000,
        "idzona": 56
      },
      {
        "name": "Campo Amor",
        "price": 11000,
        "idzona": 56
      },
      {
        "name": "Cristo Rey",
        "price": 11000,
        "idzona": 56
      },
      {
        "name": "Guayabal",
        "price": 12000,
        "idzona": 56
      },
      {
        "name": "La Colina",
        "price": 12000,
        "idzona": 56
      },
      {
        "name": "El Rodeo",
        "price": 13000,
        "idzona": 56
      }
    ];

    zonasDisponibles: Zona[] = [];
  barriosDisponibles: Barrio[] = [];
  selectedBarrio?: Barrio;


  onTabuladorChange(event: MatSelectChange) {
    const tabuladorId = event.value;
    this.zonasDisponibles = this.zona.filter(z => z.idtabulador === tabuladorId);
    this.barriosDisponibles = []; // Limpiar los barrios cuando cambie el tabulador
  }
  onBarrioSelect(barrio: Barrio) {
    this.selectedBarrio = barrio;
  }

  onZonaChange(event: MatSelectChange) {
    const zonaId = event.value;
    this.barriosDisponibles = this.barrio.filter(b => b.idzona === zonaId);
  }
  
    


}
