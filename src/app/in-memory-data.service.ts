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
        location: "Palo Altom, California"
      },
      {
        name: "Prosper",
        logo: "../../assets/logos/prosper.png",
        totalRaised: 3547000000,
        employees: "200-500",
        location: "San Fransisco, California"
      },
      {
        name: "Passport",
        logo: "../../assets/logos/passport.png",
        totalRaised: 800000,
        employees: "50-200",
        location: "Atlanta, Georgia"
      },
      {
        name: "Zoobean",
        logo: "../../assets/logos/zoobean.png",
        totalRaised: 1642619,
        employees: "1-10",
        location: "Detroit, Michigan"
      },
      {
        name: "Codementor",
        logo: "../../assets/logos/codementor.png",
        totalRaised: 2200000,
        employees: "1-10",
        location: "Clevland, Ohio"
      },
      {
        name: "Rinse",
        logo: "../../assets/logos/rinse.png",
        totalRaised: 10425990,
        employees: "11-50",
        location: "Miami, Florida"
      },
      {
        name: "Wove",
        logo: "../../assets/logos/wove.png",
        totalRaised: 21426940,
        employees: "11-50",
        location: "New York City, New York"
      },
      {
        name: "Mode",
        logo: "../../assets/logos/mode.png",
        totalRaised: 134242344,
        employees: "200-500",
        location: "New York City, New York"
      },
      {
        name: "SkySafe",
        logo: "../../assets/logos/skysafe.png",
        totalRaised: 84874746,
        employees: "150",
        location: "Atlanta, Georgia"
      },
      {
        name: "Sonar",
        logo: "../../assets/logos/sonar.png",
        totalRaised: 293849283,
        employees: "1000",
        location: "Sanfransisco, California"
      },

      {
        name: "Prefer",
        logo: "../../assets/logos/prefer.png",
        totalRaised: 123321345,
        employees: "1000",
        location: "Denver, Colorado"
      },

      {
        name: "Princeton Ventures",
        logo: "../../assets/logos/princetonventures.png",
        totalRaised: 123321,
        employees: "10",
        location: "Austin, Texas"
      },

      {
        name: "Better Up",
        logo: "../../assets/logos/betterup.png",
        totalRaised: 3443243,
        employees: "100-500",
        location: "Austin, Texas"
      },

      {
        name: "Hopper",
        logo: "../../assets/logos/hopper.png",
        totalRaised: 442323424,
        employees: "100-500",
        location: "Dallas, Texas"
      },

      {
        name: "Wealthfront",
        logo: "../../assets/logos/wealthfront.png",
        totalRaised: 444423334,
        employees: "1000-5000",
        location: "San Fransisco, California"
      },

      {
        name: "Second Measure",
        logo: "../../assets/logos/secondmeasure.png",
        totalRaised: 94309494,
        employees: "1000-5000",
        location: "Nashville, Tennessee"
      },
      {
        name: "Tesorio",
        logo: "../../assets/logos/tesorio.png",
        totalRaised: 23423443,
        employees: "200-500",
        location: "Baltimore, Maryland"
      },
      {
        name: "Feather",
        logo: "../../assets/logos/feather.png",
        totalRaised: 28342734,
        employees: "100-200",
        location: "Boulder, Colorado"
      },
      {
        name: "Monkier",
        logo: "../../assets/logos/monkier.png",
        totalRaised: 463746273,
        employees: "1000-5000",
        location: "Pittsburg, Pennsylvania"
      },
      {
        name: "ReadMe",
        logo: "../../assets/logos/readme.png",
        totalRaised: 123433,
        employees: "1-10",
        location: "Athens, Georgia"
      },
    ]
    return { companies };

  }

}
