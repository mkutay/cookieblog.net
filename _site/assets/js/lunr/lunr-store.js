var store = [{
        "title": "All Of Our Posts",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/2023/03/01/every-post.html",
        "teaser": "/assets/images/default-teaser.png"
      },{
        "title": "Welcome To Our Cookie Blog",
        "excerpt":"Sir Potata: Hello and welcome to The Cookie Blog. This is where we, two (nerdy) high-school students, voice our opinions about AI art, have fun with it and explain to you readers about what is all the deal going around it. We hope to learn many things, discover ways to...","categories": ["intro"],
        "tags": [],
        "url": "/intro/2023/03/01/welcome-to-cookie-blog.html",
        "teaser": "/assets/images/default-teaser.png"
      },{
        "title": "What Is AI?",
        "excerpt":"Kuyta: Hello to everyone again! In this post, we will discuss the magical thingamajig of AI. We will answer the questions: What is AI? How is it made? What are the forms of it? How does it work? I will start with what the fuck is actually AI. The definition...","categories": ["AI"],
        "tags": [],
        "url": "/ai/2023/03/03/what-is-ai.html",
        "teaser": "/assets/images/default-teaser.png"
      },{
        "title": "What is the History of AI?",
        "excerpt":"Sir Potata: Hi again; I’ll be taking over from here. Thanks to Kuyta, we now have a good idea of what AI is. But I think that most of us have already heard about it and know something about it (if you didn’t, then I’m afraid you are probably living...","categories": ["AI","history"],
        "tags": [],
        "url": "/ai/history/2023/03/12/history-of-ai.html",
        "teaser": "/assets/images/default-teaser.png"
      },{
        "title": "How Does AI Work?",
        "excerpt":"Kuyta: Hello to everyone! While Sir Potata is busy with some nerdy stuff, I thought I could write a post on how AI works. So here we go! Now that we know about AI’s definition and history, we can talk about how it works. In our other posts, we mentioned...","categories": ["AI"],
        "tags": [],
        "url": "/ai/2023/04/24/how-does-ai-work.html",
        "teaser": "/assets/images/default-teaser.png"
      },{
        "title": "Machine Learning Models for Music Creation",
        "excerpt":"Kuyta: Welcome back everyone! For today’s blog post I will be talking about AI and machine learning again. But this time, I will show the machine learning models for sound generation, especially music creation. I, myself, am very keen on music. I love to listen to music. However, my listening...","categories": ["AI","music"],
        "tags": [],
        "url": "/ai/music/2023/05/01/machine-learning-models-for-music-creation.html",
        "teaser": "/assets/images/default-teaser.png"
      },{
    "title": null,
    "excerpt":"     404     Page not found :(    The requested page could not be found.   ","url": "http://localhost:4000/404.html"
  },{
    "title": null,
    "excerpt":"Hi! We are Kuyta and Sir Potata.  ","url": "http://localhost:4000/about/"
  },{
    "title": null,
    "excerpt":"Super customizable Everything from the menus, sidebars, comments, and more can be configured or set with YAML Front Matter. Learn more Responsive layouts Built with HTML5 + CSS3. All layouts are fully responsive with helpers to augment your content. Learn more 100% free Free to use however you want under...","url": "http://localhost:4000/"
  },{
    "title": "The Cookie Blog",
    "excerpt":"Photo credit: MidJourney What is AI? Kuyta: Hello to everyone again! In this post, we will discuss the magical thingamajig of AI. Read More Photo credit: MidJourney What is the History of AI? Sir Potata: Hi again; I’ll be taking over from here. Thanks to Kuyta, we now have a...","url": "http://localhost:4000/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","url": "http://localhost:4000/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","url": "http://localhost:4000/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [ {%- for c in site.collections -%} {%- if forloop.last -%} {%- assign l = true -%} {%- endif -%} {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%} {%- for doc in docs -%} {%- if doc.header.teaser -%} {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture...","url": "http://localhost:4000/assets/js/lunr/lunr-store.js"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date...","url": "http://localhost:4000/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "http://localhost:4000/robots.txt"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif...","url": "http://localhost:4000/feed.xml"
  }]
