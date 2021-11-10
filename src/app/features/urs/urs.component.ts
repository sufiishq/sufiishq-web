import { Component, OnInit } from '@angular/core';
import {ifStmt} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-urs',
  templateUrl: './urs.component.html',
  styleUrls: ['./urs.component.css']
})
export class UrsComponent implements OnInit {

  events = [
    { type: EventType.URS, title: "Sufi Syed Muhammad Ali Chishti Nizami", location: "PakPattan, Punjab, Pakistan", day: 2, month: 11 },
    { type: EventType.URS, title: "Abdullah Shah Ghazi", location: "Karachi, Sindh, Pakistan", day: 20, month: 12 },
    { type: EventType.URS, title: "Syed Abul Hassan Bin Usman Bin Ali Al-Hajweri - Data Darbar", location: "Lahore, Punjab, Pakistan", day: 18, month: 2 },
    { type: EventType.URS, title: "Makhdoom Rukn-ud-din, Shah Rukn-e-Alam", location: "Multan, Punjab, Pakistan", day: 6, month: 5 },
    { type: EventType.URS, title: "Baba Farid Ganjshakar", location: "PakPattan, Punjab, Pakistan", day: 5, month: 1 },
    { type: EventType.URS, title: "Syed Muhammad Usman - Lal Shahbaz Qalandar", location: "Sehwan, Sindh, Pakistan", day: 18, month: 8 },
    { type: EventType.URS, title: "Hazrat Khwaja Ghareeb Nawaz - Khawaja Moin Uddin Chishti Nizami", location: "Ajmer, Rajasthan, India", day: 19, month: 7 },
    { type: EventType.URS, title: "Hazrat Khwaja Nizamuddin Auliya", location: "New Dehli, India", day: 19, month: 7 },
    { type: EventType.URS, title: "Shah Shams Tabriz", location: "Multan, Punjab, Pakistan", day: 6, month: 9 },
    { type: EventType.URS, title: "Baba Bulley Shah", location: "Qasoor, Punjab, Pakistan", day: 18, month: 1 },
    { type: EventType.URS, title: "Shah Abdul Latif Bhitai", location: "Bhit Shah, Sindh, Pakistan", day: 14, month: 2 },
    { type: EventType.URS, title: "Ya Ghous-ul-Azam Dastgir Ya Shaikh Abdul Qadir Jilani R.A", location: "Baghdad, Iraq", day: 11, month: 4 },
    { type: EventType.NIAZ, title: "Hazrat Imam Hussain Razi Allah Tala Anhu", location: "Baghdad, Iraq", day: 10, month: 1 }
  ]

  islamicMonths = [
    { index: 1, name: "مُحَرَّم" },
    { index: 2, name: "صَفَر" },
    { index: 3, name: "رَبيع الأوّل" },
    { index: 4, name: "رَبيع الثاني" },
    { index: 5, name: "جُمادى الأولى" },
    { index: 6, name: "جُمادى الآخرة" },
    { index: 7, name: "رَجَب" },
    { index: 8, name: "شَعْبان" },
    { index: 9, name: "رَمَضان" },
    { index: 10, name: "شَوّال" },
    { index: 11, name: "ذوالقعدة" },
    { index: 12, name: "ذوالحجة" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getEventTypeName(eventType: EventType): string {
    return eventType == EventType.NIAZ ? "NIAZ" : "URS"
  }

  getIslamicMonthByIndex(index: number): string {
    return this.islamicMonths?.find(item => item.index == index)?.name || ""
  }
}

export enum EventType {
  URS, NIAZ
}
