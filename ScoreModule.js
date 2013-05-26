(function() {
		var s, ps,
 		ScoreModule = {
			settings: {
			playerWrapper: $("#player-wrapper"),
			playerCount: $("#player-count"),
			setupWrapper: $("#setup-wrapper"),
			setupButton: $("#setup")

		},

		postLoadSettings: {
			addButton: ".player-add",
			removeButton: ".player-remove",
			superNovaButton: ".super-nova"
		},

		init: function(){
			
			s = this.settings;
			ps = this.postLoadSettings;
			ScoreModule.bindUIActions();
		},

		bindUIActions: function(){
			s.setupButton.on("click", function(){
				var count = s.playerCount.val();
				
				s.setupWrapper.fadeOut("fast", function()
				{
					ScoreModule.generatePlayerCards(count);
				});
			});

			$(document).on("click", ps.addButton, function(){
				var scoreElement = $(this).parents(0).children()[1];
				ScoreModule.addPlanet(scoreElement);	
			});

			$(document).on("click", ps.removeButton, function(){
				var scoreElement = $(this).parents(0).children()[1];
				ScoreModule.removePlanet(scoreElement);	
			});

			$(document).on("click", ps.superNovaButton, function(){
				ScoreModule.superNova();
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
			var scores = $(document).find(".player-score");
			$.each(scores, function(){
				$(this).html(0);
			})
		},

		generatePlayerCards: function(playerCount){

			if(playerCount > 0){

				for (var i = 0; i < playerCount; i++) {
					s.playerWrapper.append("<div class='player'><h1>PLAYER " + (i + 1) + "</h1><div class='player-score'>0</div><a href='javascript:void(0);' class='sdBtn add player-add'><i class='icon-plus icon-white'></i></a><a href='javascript:void(0);' class='sdBtn remove player-remove'><i class='icon-minus icon-white'></i></a><a href='javascript:void(0);' class='super-nova'><i class='icon-minus icon-white'></i></a></div>");
				};
			}
		}
	};

		ScoreModule.init();
	})();