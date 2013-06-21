(function() {
var s, ps,
 		ScoreModule = {
			settings: {
			playerWrapper: $("#player-wrapper"),
			playerCount: $("#player-count"),
			setupWrapper: $("#setup-wrapper"),
			setupButton: $("#setup"),
			superNovaButton: $("#supernova-button"),
			superNovaRibbon: $("#supernova-ribbon")

		},

		postLoadSettings: {
			addButton: ".player-add",
			removeButton: ".player-remove",
			playerName: "#player-name",
			editedName: ".edited-name"
		},

		init: function(){
			
			s = this.settings;
			ps = this.postLoadSettings;
			ScoreModule.bindUIActions();
		},

		bindUIActions: function(){
			s.setupButton.on("click", function(){
				var count = s.playerCount.val();
				
				//s.setupWrapper.remove();
				ScoreModule.generatePlayerCards(count);

			});

			$(document).on("click", ps.addButton, function(){
				var scoreElement = $(this).parents(0).children()[1];
				ScoreModule.addPlanet(scoreElement);	
			});

			$(document).on("click", ps.removeButton, function(){
				var scoreElement = $(this).parents(0).children()[1];
				ScoreModule.removePlanet(scoreElement);	
			});

			s.superNovaButton.click(function(){
					ScoreModule.superNova();
			});

			$(document).on("click", ps.playerName, function()
			{
				var currentName = $(this).html(); // notice "this" instead of a specific #myDiv
    			var editableText = $("<textarea class='edited-name'/>");
			    $(this).replaceWith(editableText);
			    editableText.focus();

			});

			 $(document).on("blur",ps.editedName, function(){
			    	 var html = $(this).val();
				    // create a dynamic div
				    var viewableText = $("<h2>");
				    // set it's html 
				    viewableText.html(html.toUpperCase());
				    // replace out the textarea
				    $(this).replaceWith(viewableText);
			    });
		},

		addPlanet: function(elem){
			var currentScore = parseInt($(elem).text(),10);
			var newScore = currentScore + 1;
			if(newScore <= 10)
			{
				$(elem).fadeOut('fast', function(){
					$(elem).html(newScore);
					$(this).fadeIn("fast");
				});

				if(newScore == 10)
				{
					alert("WINRAR!")
				}
			}
		},
		
		removePlanet: function(elem){
			var currentScore = parseInt($(elem).text(),10);
			var newScore = currentScore - 1;

			if(currentScore > 0)
			{
				$(elem).fadeOut('fast', function(){
					$(elem).html(newScore);
					$(this).fadeIn("fast");
				});	
			}
		},

		superNova: function(){
			console.log("calling superNova");
			var scores = $(document).find(".player-score");
			$.each(scores, function(){
				$(this).html(0);
			})
		},

		generatePlayerCards: function(playerCount){

			if(playerCount > 0){

				s.setupWrapper.remove();

				for (var i = 0; i < playerCount; i++) {
					s.playerWrapper.append("<div class='player'><h1 id='player-name'>PLAYER " + (i + 1) + "</h1><div class='player-score'>0</div><a href='javascript:void(0);' class='sdBtn add player-add'>+</a><a href='javascript:void(0);' class='sdBtn remove player-remove'>-</a></div>");
				};
				
				s.superNovaButton.fadeIn("fast");
				s.superNovaRibbon.fadeIn("fast");
			}
		}
	};
	ScoreModule.init();
	})();