$(document).ready(function() {
	$("#searchinput").hide();
	var searchresults;
	var icontype = "search";

	function removelist() {
		$("#searchbtn").html(
			"<button class='btn btn-outline-secondary' type='button'><i class='fas fa-search'></i></button>"
		);
		icontype = "search";
		for (i = 9; i >= 0; i--) {
			$("#newdiv" + i).hide(1000, function() {
				$(this).remove();
			});
		}
	}

	function callwiki(search) {
		$("#random").hide(400);

		$.ajax({
			url:
				"https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" +
				search,
			dataType: "jsonp",
			async: true,
			success: function(data) {
				console.log(data);
				//alert(data[1][0])
				if (data[1].length == 0) {
					$(".rr").append(
						"<div id='newdiv1' style='display:none; margin:2px;' class='card widiv card-body bg-dark text-left'><a style='font-size:1.25em; color:white; text-decoration:none;'href='#'></a><p>no matches found</p></div>"
					);
				}
				for (i = 0; i < data[3].length; i++) {
					$(".rr").append(
						"<div id='newdiv" +
							i +
							"' style='display:none; margin:2px;' class='card widiv card-body bg-dark text-left'><a style='font-size:1.25em; color:white; text-decoration:none;'href='" +
							data[3][i] +
							"'>" +
							data[1][i] +
							"</a><p>" +
							data[2][i] +
							"</p></div>"
					);
				}
				$(".widiv").show(800);
				$("#searchbtn").html(
					"<button class='btn btn-outline-secondary' type='button'><i class='fas fa-times'></i></button>"
				);
				icontype = "exit";
			}
		});
	}

	$(".searchdiv").on("click", function() {
		$("#searchtext").hide(500);
		$("#search").hide(500);
		$("#searchinput").show(1000);
		$("#searchbox").focus();
	});

	$("#searchbox").keypress(function(e) {
		if (e.which == 13) {
			if (icontype == "exit") {
				removelist();
				$("#searchbtn").trigger("click");
			} else {
				$("#searchbtn").trigger("click");
			}
		}
	});

	$("#searchbtn").on("click", function() {
		if (icontype == "search") {
			var sbval = $("#searchbox").val();

			callwiki(sbval);
			$("#searchbox").blur();
		} else {
			removelist();
		}
	});

	$("input:text").focus(function() {
		$(this).select();
	});
});
