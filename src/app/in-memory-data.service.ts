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
        logo: "",
        totalRaised: 516000000,
        employees: "50-200",
        location: "Palo Altom, California"
      },
      {
        name: "Prosper",
        logo: "",
        totalRaised: 3547000000,
        employees: "200-500",
        location: "San Fransisco, California"
      },
      {
        name: "Passport",
        logo: "",
        totalRaised: 800000,
        employees: "50-200",
        location: "Atlanta, Georgia"
      },
      {
        name: "Zoobean",
        logo: "",
        totalRaised: 1642619,
        employees: "1-10",
        location: "Detroit, Michigan"
      },
      {
        name: "Codementor",
        logo: "",
        totalRaised: 2200000,
        employees: "1-10",
        location: "Clevland, Ohio"
      },
      {
        name: "Rinse",
        logo: "",
        totalRaised: 10425990,
        employees: "11-50",
        location: "Miami, Florida"
      },
      {
        name: "Wove",
        logo: "",
        totalRaised: 21426940,
        employees: "11-50",
        location: "New York City, New York"
      },
      {
        name: "Mode",
        logo: "",
        totalRaised: 134242344,
        employees: "200-500",
        location: "New York City, New York"
      },
      {
        name: "SkySafe",
        logo: "",
        totalRaised: 84874746,
        employees: "150",
        location: "Atlanta, Georgia"
      },
      {
        name: "Sonar",
        logo: "",
        totalRaised: 293849283,
        employees: "1000",
        location: "Sanfransisco, California"
      },

      {
        name: "Prefer",
        logo: "",
        totalRaised: 123321345,
        employees: "1000",
        location: "Denver, Colorado"
      },

      {
        name: "Princeton Ventures",
        logo: "",
        totalRaised: 123321,
        employees: "10",
        location: "Austin, Texas"
      },

      {
        name: "Better Up",
        logo: "",
        totalRaised: 3443243,
        employees: "100-500",
        location: "Austin, Texas"
      },

      {
        name: "Hopper",
        logo: "",
        totalRaised: 442323424,
        employees: "100-500",
        location: "Dallas, Texas"
      },

      {
        name: "Wealthfront",
        logo: "",
        totalRaised: 4444233234,
        employees: "1000-5000",
        location: "San Fransisco, California"
      },

      {
        name: "Second Measure",
        logo: "",
        totalRaised: 94309494,
        employees: "1000-5000",
        location: "Nashville, Tennessee"
      },
      {
        name: "Tesorio",
        logo: "",
        totalRaised: 23423443,
        employees: "200-500",
        location: "Baltimore, Maryland"
      },
      {
        name: "Feather",
        logo: "",
        totalRaised: 28342734,
        employees: "100-200",
        location: "Boulder, Colorado"
      },
      {
        name: "Feather",
        logo: "",
        totalRaised: 463746273,
        employees: "1000-5000",
        location: "Pittsburg, Pennsylvania"
      },
      {
        name: "ReadMe",
        logo: "",
        totalRaised: 123433,
        employees: "1-10",
        location: "Athens, Georgia"
      },
    ]
    return { companies };

  }

}
