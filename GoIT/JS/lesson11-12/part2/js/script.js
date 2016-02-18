$(function() {

  var html = $( '#template' ).html();

  var users = [
    {
      userName: 'Raj Koothrappali',
      userPhoto: '1.jpg',
      userDescription: 'Raj Koothrappali is an Indian-born astrophysicist who lives in Pasadena and works at Caltech. Until recently, Raj was unable to talk to women due to his selective mutism. Raj usually needed a beer in his hand before he could even talk to the girls, including Penny with whom he had a one night stand of sorts.',
      userFullName: 'Rajesh Ramayan Koothrappali, Ph.D.',
      userBithday: 'October 6, 1981',
      userCareer: 'Dr. Koothrappali is an astrophysicist at Caltech. When he discovered a planetary object beyond the Kuiper belt, 2008 NQ17 (which he nicknamed Planet Bollywood), Raj was included in People magazine&rsquo;s "30 Under 30 To Watch"',
      userHistory: 'Raj was born in New Delhi, India, the son of a wealthy gynecologist. Although Raj has tried to play down his familys wealth, Sheldon has seen notarized proof that the Koothrappalis are vastly wealthy - Richie Rich rich. During his childhood, Raj&rsquo;s parents employed a number of servants and his dad drove a Bentley. Raj has four siblings including Priya, his sister who dated Leonard. Before moving to Pasadena, Raj completed some of his education at the University of Cambridge, where he fell in love with astrophysics.'
    },
    {
      userName: 'Penny',
      userPhoto: '2.jpg',
      userDescription: 'Penny is a former waitress, actress and a current pharmaceutical sales rep. Originally from Omaha, Penny moved to California with dreams of becoming a Hollywood actress. Since 2007, Penny has lived in the apartment across the hall from Sheldon and Leonard, who is now her fiance',
      userFullName: 'Penny',
      userBithday: 'November 22',
      userCareer: 'Penny worked as a waitress at the Cheesecake Factory while she waited for her acting career to take off. Penny was already working at the Cheesecake Factory when she met Sheldon and Leonard and, as a result, the guys began to eat at the restaurant on Tuesday nights. Penny quit her job at the Cheesecake Factory in 2014 to focus on her acting career.',
      userHistory: 'Penny&rsquo;s lack of education sets her apart from the guys and Amy and Bernadette, though she has street smarts which many of the others lack. Penny has also proved to be very handy as a result of growing up on a farm, where she rebuilt a tractor engine at the age of twelve. Penny has been called on by the guys to defeat spiders and online hackers. In 2012, Penny went back to school for some history and psychology classes, although she initially kept it quiet from Leonard who she felt would make a big deal about it.'
    },
    {
      userName: 'Leonard Hofstadter',
      userPhoto: '3.jpg',
      userDescription: 'Leonard Hofstadter is an experimental physicist at Caltech in Pasadena. Leonard is currently engaged to Penny, whom he lives across the hall from with Sheldon Cooper.',
      userFullName: 'Leonard Leakey Hofstadter, Ph.D.',
      userBithday: 'May 1980',
      userCareer: 'Leonard is an experimental physicist at Caltech. In his career, he has occasionally worked with Sheldon, often with mixed results. After Sheldon and Leonard wrote a paper on super-solids, Sheldon received a letter asking them to present their paper at a physics conference. Sheldon threw the letter away without asking Leonard, who later decided to present the paper without Sheldon. Sheldon showed up at Leonard&rsquo;s presentation and derailed it, leading to a physical fight between him and Leonard that ended up on YouTube.',
      userHistory: 'Leonard is from a high-achieving family and has often felt unloved and under appreciated. All the members of his family are accomplished scientists, except for his younger brother who is a tenured law professor at Harvard. Leonard has close friendships with Howard and Raj, both of whom were his friends before he met Sheldon. Leonard has at times been Howard&rsquo;s wingman, though after spending a night on the town with Howard, Leonard started to question whether Howard saw nearly as much action as he claimed. After Howard called on a pact he had with Leonard, he asked Penny to set Howard up with one of her friends. Penny set him up with Bernadette, at that time her co-worker at the Cheesecake Factory. Bernadette is now Howard&rsquo;s wife.'
    },
    {
      userName: 'Sheldon Cooper',
      userPhoto: '4.jpg',
      userDescription: 'is a theoretical physicist at Caltech who lives with his best friend, Leonard Hofstadter. Sheldon is known for his brilliant mind but also his quirky behavior and idiosyncrasies. Sheldon has a hard time understanding sarcasm and is, with the exception of his close friends and girlfriend Amy, uncomfortable with most social situations. Sheldon is extremely logical, but this comes at a cost of often being rude of condescending to others. Although Sheldon&rsquo;s friends are often the subject of his put downs and narcissistic behavior, they have generally learned to live with Sheldon&rsquo;s quirks.',
      userFullName: 'Sheldon Lee Cooper, Ph.D.',
      userBithday: 'February 26, 1980',
      userCareer: 'Sheldon was offered the opportunity to conduct a three month expedition to the North Pole to study monopoles. Despite their initial reluctance at spending three months in a ice cabin with Sheldon, the other guys accepted Sheldon&rsquo;s request to accompanying him there. When the guys returned from the expedition, Sheldon was upset to learn the guys had manipulated his data with an electric can opener. Having already publicly announced his results, Sheldon returned home to Texas in shame. The guys flew out to pick him up and, when Sheldon got tired of his mother&rsquo;s religious views, he returned to Pasadena.',
      userHistory: 'Sheldon was born in Galveston, Texas, to Mary Cooper, a devout Evangelical Christian, and George Cooper, an alcoholic. Sheldon has an older brother and a fraternal twin sister, Missy. According to Mary Cooper, her two other children are "dumb as soup". Sheldon&rsquo;s father died when he was fourteen. Sheldon&rsquo;s academic brilliance started at an early age. Sheldon started college at the age of eleven and graduate at fourteen. He was, at the time, the youngest person to receive the Stevenson Award, receiving it at fourteen and a half. Sheldon received his first doctorate at age sixteen. He spent a year as a visiting professor at the University of Heidelberg in Germany.'
    },
    {
      userName: 'Amy Fowler',
      userPhoto: '5.jpg',
      userDescription: 'Amy Farrah Fowler, PH.D. is a neurobiologist from Glendale, California. Amy met Sheldon Cooper after Howard and Raj created a fake dating profile for him, and Amy&rsquo;s profile was matched to his.',
      userFullName: 'Amy Farrah Fowler, Ph.D.',
      userBithday: 'October 29, 1985',
      userCareer: 'She has a Ph.D. in neurobiology, with a research focus on addiction in primates and invertebrates, occasionally mentioning such experiments as getting a capuchin monkey addicted to cigarettes or starfish addicted to cocaine.',
      userHistory: 'Amy is originally from Glendale, California. Amy has described her high school years as lonely, saying she used to eat lunch with the janitor, and that only her mother signed her yearbook. Amy has studied at Princeton, Harvard and spent a semester in Norway.'
    },
     {
      userName: 'Howard Wolowitz',
      userPhoto: '6.jpg',
      userDescription: 'Howard Wolowitz is an aerospace engineer and former NASA astronaut who works at Caltech in Pasadena. Howard is married to Bernadette Rostenkowski-Wolowitz and is best friends with Raj Koothrappali.',
      userFullName: 'Howard Joel Wolowitz',
      userBithday: 'May 13, 1982',
      userCareer: 'Unlike Leonard, Sheldon, Raj, Amy and Bernadette, Howard does not have a Ph.D., instead having a master&rsquo;s degree from MIT. Sheldon is often condescending and derisory towards Howard for his lack of a degree and about engineering in general. Howard&rsquo;s work has often included projects for NASA, even though he once crashed the Mars rover in a ditch while trying to impress a woman. Howard co-designed the Pishkin-Wolowitz Liquid Waste Disposal system, though a fatal flaw which he was unable to fix caused a messy incident aboard the space station.',
      userHistory: 'Howard is the product of an overbearing Jewish mother, Debbie Wolowitz. Although Howard was often angry about his mother&rsquo;s dominance of his life, he undeniably remained dependent on her until his relationship with Bernadette started to get serious. His strong bond with his mother was likely the result of Howard&rsquo;s father leaving him and Mrs. Wolowitz when Howard was young. Howard has described how when his mother started dating after her husband left, Howard was a jerk to her about it. As a result, Mrs. Wolowitz didn&rsquo;t really date again and was always alone.'
    },
     {
      userName: 'Bernadette',
      userPhoto: '7.jpg',
      userDescription: 'is originally a waitress and coworker of Penny&rsquo;s at the Cheesecake Factory, which pays the way for her graduate studies in microbiology per "The Creepy Candy Coating Corollary"',
      userFullName: 'Bernadette Maryann Rostenkowski-Wolowitz, Ph.D.',
      userBithday: 'July 26, 1982',
      userCareer: 'Bernadette worked at the Cheesecake Factory with Penny as she studied to become a microbiologist. After getting her degree, Bernadette was offered a high-paying job at a pharmaceuticals company called Zangen. Bernadette has had the occasional accident in her lab, leading to stays in quarantine.',
      userHistory: 'From Yorba Linda, California, Bernadette is of Polish origin and Catholic upbringing, and is frequently seen wearing a cross necklace. She is generally a friendly and good-natured individual, quickly making friends with Penny and Amy, as well as the rest of the gang. However, despite her short stature, she is regarded as being somewhat intimidating, largely because of her sharp tongue, aggressive demeanour and occasional signs of mania, e.g. when she got into a fight with Amy over a parking space Sheldon and Howard were fighting over, and when she explains her interest in microbiology as being because she feels like a god to the bacteria she is studying. In season 8&rsquo;s "The Locomotive Decoupling", Penny is interviewing for a pharmaceutical rep position with Bernadette&rsquo;s boss, and they both agree that Bernadette is something of a bully.'
    }
  ];

  var $body = $( 'body' );
  var $wrapperNav = $( '.wrapper-nav' );

    $body.one( 'click', '.user1', function(e){  
    e.preventDefault();
    i = 0;
    content = tmpl( html, {
      data: users[i]
    });
    $(' .wrapper ').remove();
    $wrapperNav.addClass("hide")
    $body.append( content );
  });

    $body.one( 'click', '.user2', function(e){  
    e.preventDefault();
    $wrapperNav.addClass("hide");
    i = 1;
    content = tmpl( html, {
      data: users[i]
    });
    $(' .wrapper ').remove();
    $body.append( content );
  });

  $body.one( 'click', '.user3', function(e){ 
    e.preventDefault();
    $wrapperNav.addClass("hide"); 
    i = 2;
    content = tmpl( html, {
      data: users[i]
    });
    $(' .wrapper ').remove();
    $body.append( content );
  });
  
    $body.one( 'click', '.user4', function(e){ 
    e.preventDefault();
    $wrapperNav.addClass("hide"); 
    i = 3;
    content = tmpl( html, {
      data: users[i]
    });
    $(' .wrapper ').remove();
    $body.append( content );
  });

    $body.one( 'click', '.user5', function(e){  
    e.preventDefault();
    $wrapperNav.addClass("hide");
    i = 4;
    content = tmpl( html, {
      data: users[i]
    });
    $(' .wrapper ').remove();
    $body.append( content );
  });

    $body.one( 'click', '.user6', function(e){
    e.preventDefault();
    $wrapperNav.addClass("hide");  
    i = 5;
    content = tmpl( html, {
      data: users[i]
    });
    $(' .wrapper ').remove();
    $body.append( content );
  });

    $body.one( 'click', '.user7', function(e){
    e.preventDefault();
    $wrapperNav.addClass("hide");  
    i = 6;
    content = tmpl( html, {
      data: users[i]
    });
    $(' .wrapper ').remove();
    $body.append( content );
  });

    $body.on( 'click', '.next', function(e){
    e.preventDefault();  
    
    if ( i == 6 ) {
      i = 0; 
      content = tmpl( html, {
      data: users[i]
    });
    $(' .information ').remove();
    $body.append( content );
     
    } else {
      i += 1;
    content = tmpl( html, {
      data: users[i]
    });
    $(' .information ').remove();
    $body.append( content );
    
    }
  });

});
