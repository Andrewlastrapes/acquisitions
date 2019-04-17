import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const companies = [
      {
        name: "Comprehend",
        logo: "../../assets/logos/comprehend.png",
        totalRaised: 516000000,
        employees: "50-200",
        location: "Palo Altom, California",
        status: "target"
      },
      {
        name: "Prosper",
        logo: "../../assets/logos/prosper.png",
        totalRaised: 354700000,
        employees: "200-500",
        location: "San Fransisco, California",
        status: "target"
      },
      {
        name: "Passport",
        logo: "../../assets/logos/passport.png",
        totalRaised: 800000,
        employees: "50-200",
        location: "Atlanta, Georgia",
        status: "target"
      },
      {
        name: "Zoobean",
        logo: "../../assets/logos/zoobean.png",
        totalRaised: 1642619,
        employees: "1-10",
        location: "Detroit, Michigan",
        status: "target"
      },
      {
        name: "Codementor",
        logo: "../../assets/logos/codementor.png",
        totalRaised: 2200000,
        employees: "1-10",
        location: "Clevland, Ohio",
        status: "target"
      },
      {
        name: "Rinse",
        logo: "../../assets/logos/rinse.png",
        totalRaised: 10425990,
        employees: "11-50",
        location: "Miami, Florida",
        status: "target"
      },
      {
        name: "Wove",
        logo: "../../assets/logos/wove.png",
        totalRaised: 21426940,
        employees: "11-50",
        location: "New York City, New York",
        status: "target"
      },
      {
        name: "Mode",
        logo: "../../assets/logos/mode.png",
        totalRaised: 134242344,
        employees: "200-500",
        location: "New York City, New York",
        status: "target"
      },
      {
        name: "SkySafe",
        logo: "../../assets/logos/skysafe.png",
        totalRaised: 84874746,
        employees: "150",
        location: "Atlanta, Georgia",
        status: "target"
      },
      {
        name: "Sonar",
        logo: "../../assets/logos/sonar.png",
        totalRaised: 293849283,
        employees: "1000",
        location: "San fransisco, California",
        status: "target"
      },

      {
        name: "Prefer",
        logo: "../../assets/logos/prefer.png",
        totalRaised: 123321345,
        employees: "1000",
        location: "Denver, Colorado",
        status: "target"
      },

      {
        name: "Princeton Ventures",
        logo: "../../assets/logos/princetonventures.png",
        totalRaised: 123321,
        employees: "10",
        location: "Austin, Texas",
        status: "target"
      },

      {
        name: "Better Up",
        logo: "../../assets/logos/betterup.png",
        totalRaised: 3443243,
        employees: "100-500",
        location: "Austin, Texas",
        status: "target"
      },

      {
        name: "Hopper",
        logo: "../../assets/logos/hopper.png",
        totalRaised: 442323424,
        employees: "100-500",
        location: "Dallas, Texas",
        status: "target"
      },

      {
        name: "Wealthfront",
        logo: "../../assets/logos/wealthfront.png",
        totalRaised: 444233234,
        employees: "1000-5000",
        location: "San Fransisco, California",
        status: "target"
      },

      {
        name: "Second Measure",
        logo: "../../assets/logos/secondmeasure.png",
        totalRaised: 94309494,
        employees: "1000-5000",
        location: "Nashville, Tennessee",
        status: "target"
      },
      {
        name: "Tesorio",
        logo: "../../assets/logos/tesorio.png",
        totalRaised: 23423443,
        employees: "200-500",
        location: "Baltimore, Maryland",
        status: "target"
      },
      {
        name: "Feather",
        logo: "../../assets/logos/feather.png",
        totalRaised: 28342734,
        employees: "100-200",
        location: "Boulder, Colorado",
        status: "target"
      },
      {
        name: "Monkier",
        logo: "../../assets/logos/monkier.png",
        totalRaised: 463746273,
        employees: "1000-5000",
        location: "Pittsburg, Pennsylvania",
        status: "target"
      },
      {
        name: "ReadMe",
        logo: "../../assets/logos/readme.png",
        totalRaised: 123433,
        employees: "1-10",
        location: "Athens, Georgia",
        status: "target"
      },
    ]
    return { companies };

  }

}
