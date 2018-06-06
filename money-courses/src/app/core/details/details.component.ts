import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  h1 = 'Оплата';
  cont1 = 'Стоимость составляет 80 белорусских рублей. Оплату можно произвести наличными, по карточке, '
  + ' перевести деньги с телефонного счёта, через яндекс.деньги. Половина вносится вначале, половина в конце.'
  hmain = 'Сделай кусовой';
  h2 = 'О программе';
  h21 = 'Курс';
  cont21 = 'Индивидуальный обучающий курс, в рамках которого будет выполнен курсовой проект.';
  h22 = 'Пояснительная записка';
  cont22 = 'Написание пояснительной записки - как написать пояснительную записку за час.';
  h23 = 'Сроки';
  cont23 = 'Время на составление программы - 1 неделя, программа рассчитана на 1 месяц по 4 часа в неделю с преподавателем.';
  h3 = 'Прохождение';

  cont3 = ' Цель программы - курсовой проект своими руками. В программу входят теория и практика.' +
  ' Практика - одно 4-х часовое занятие в неделю с преподавателем. За месяц вместе с ним '+
                  'вы напишите свой курсовой проект. Самостоятельная работа не обязательна, но рекомендуется для усвоения материала. ;'

  constructor() { }

  ngOnInit() {

  }

}