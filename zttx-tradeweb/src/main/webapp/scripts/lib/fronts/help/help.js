$(function(){var a=$(".nav-tree .tree li").click(function(){$(this).hasClass("active")?$(a).removeClass("active"):$(a).not($(this).addClass("active")).removeClass("active")});$(".nav-tree .tree li.active > ul").show();var b=$(".search-help-box .span-select-item").mouseleave(function(){$(b).hide()});$(".span-select").hover(function(){b.show()});var c=$('[name="cateId"]'),d=$(".search-help-box .span-select-item a"),e=$.grep(d,function(a){return $(a).data("id")==c.val()?a:void 0});$(".span-select").text(e[0]?$(e).html():"所有"),$(d).click(function(){$(".span-select").text($(this).text()),$(c).val($(this).data("id")),$(b).hide()})});