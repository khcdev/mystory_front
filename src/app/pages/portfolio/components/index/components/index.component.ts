import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-portfolio-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class PortfolioIndexComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    $('.post-module').hover(function() {
      $(this).find('.description').stop().animate({
        height: "toggle",
        opacity: "toggle"
      }, 300);
    });

    $(".fab,.backdrop").click(function() {
      if ($(".backdrop").is(":visible")) {
        $(".backdrop").fadeOut(125);
        $(".fab.child")
          .stop()
          .animate(
            {
              bottom: $("#masterfab").css("bottom"),
              opacity: 0
            },
            125,
            function() {
              $(this).hide();
            }
          );
      } else {
        $(".backdrop").fadeIn(125);
        $(".fab.child").each(function() {
          $(this)
            .stop()
            .show()
            .animate(
              {
                bottom:
                  parseInt($("#masterfab").css("bottom")) +
                  parseInt($("#masterfab").outerHeight()) +
                  70 * $(this).data("subitem") -
                  $(".fab.child").outerHeight() +
                  "px",
                opacity: 1
              },
              125
            );
        });
      }
    });
  }

  onContentChange(event: string) {
  }

}