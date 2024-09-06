let dados = [
    {
        titulo: "Rayssa Leal",
        esporte: "Skate",
        modalidade: "Skate",
        medalhas: ["Prata - Tóquio 2020"],
        descricao: "Rayssa Leal, a Fadinha, é uma skatista brasileira que conquistou o mundo com seu talento e carisma. Aos poucos anos, ela já coleciona títulos e inspira milhões de jovens.",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        tags: "skate fada sk8"
    },
    {
        titulo: "Beatriz Souza",
        esporte: "Judô",
        modalidade: "Judô",
        medalhas: ["Ouro - Paris 2024"],
        descricao: "Beatriz Souza é uma judoca brasileira que se destacou nos Jogos Olímpicos de Paris 2024, conquistando a medalha de ouro e inspirando novas gerações de atletas.",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Souza",
        tags: "judô judo judoca judoka"
    },
    {
        titulo: "Rebeca Andrade",
        esporte: "Ginástica",
        modalidade: "Ginástica Artística",
        medalhas: ["Prata - Tóquio 2020", "Bronze - Tóquio 2020"], // Exemplo de múltiplas medalhas
        descricao: "Rebeca Andrade é uma ginasta brasileira que conquistou o mundo com suas acrobacias e força. Aos poucos anos, ela já coleciona títulos e é considerada uma das maiores ginastas da história do Brasil.",
        link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        tags: "ginástica ginastica ouro"
    },
    {
        titulo: "Aline Silva",
        esporte: "Taekwondo",
        modalidade: "Taekwondo",
        medalhas: ["Bronze - Londres 2012"],
        descricao: "Aline Silva é uma lutadora de taekwondo brasileira que conquistou diversas medalhas em competições internacionais, incluindo uma medalha de bronze nos Jogos Olímpicos de Londres 2012.",
        link: "https://pt.wikipedia.org/wiki/Aline_Silva",
        tags: "taekwondo luta artes_marciais"
    },
    {
        titulo: "Arthur Zanetti",
        esporte: "Ginástica",
        modalidade: "Ginástica",
        medalhas: ["Ouro - Londres 2012", "Ouro - Rio 2016"],
        descricao: "Arthur Zanetti é um ginasta brasileiro especialista em argolas, sendo o primeiro brasileiro a conquistar uma medalha de ouro em uma Olimpíada individual. Ele conquistou o ouro em Londres 2012 e repetiu o feito no Rio 2016.",
        link: "https://pt.wikipedia.org/wiki/Arthur_Zanetti",
        tags: "ginástica argolas ouro"
    },
	{
		titulo: "Cesar Cielo",
		esporte: "Natação",
		modalidade: "Nado Livre",
		medalhas: ["Ouro - Pequim 2008", "Prata - Londres 2012"],
		descricao: "Um dos maiores nadadores brasileiros de todos os tempos, Cesar Cielo conquistou diversas medalhas em competições internacionais.",
		link: "https://pt.wikipedia.org/wiki/Cesar_Cielo",
		tags: "natação nado livre recorde mundial"
	},
	{
		titulo: "Maurício Lima",
		esporte: "Vôlei",
		modalidade: "Vôlei de Praia",
		medalhas: ["Bronze - Rio 2016"],
		descricao: "Atleta de vôlei de praia que representou o Brasil em diversas competições internacionais.",
		link: "https://pt.wikipedia.org/wiki/Maurício_Lima",
		tags: "vôlei vôlei de praia"
	},
	{
		titulo: "Gustavo Borges",
		esporte: "Natação",
		modalidade: "Nado Livre",
		medalhas: ["Prata - Atlanta 1996", "Bronze - Sydney 2000"],
		descricao: "Considerado um dos maiores nadadores brasileiros de todos os tempos, Gustavo Borges conquistou diversas medalhas em competições internacionais.",
		link: "https://pt.wikipedia.org/wiki/Gustavo_Borges",
		tags: "natação nado livre lenda"
	},
	{
		titulo: "Ana Marcela Cunha",
		esporte: "Natação",
		modalidade: "Maratonas Aquáticas",
		medalhas: ["Ouro - Rio 2016", "Bronze - Tóquio 2020"],
		descricao: "Especialista em maratonas aquáticas, Ana Marcela Cunha é uma das maiores representantes do Brasil na natação em águas abertas.",
		link: "https://pt.wikipedia.org/wiki/Ana_Marcela_Cunha",
		tags: "natação maratona aquática ouro"
	},
	{
		titulo: "Fabiana Claudino",
		esporte: "Vôlei",
		modalidade: "Vôlei",
		medalhas: ["Ouro - Pequim 2008", "Prata - Londres 2012"],
		descricao: "Central do vôlei feminino brasileiro, Fabiana Claudino foi fundamental para as conquistas do Brasil nas Olimpíadas.",
		link: "https://pt.wikipedia.org/wiki/Fabiana_Claudino",
		tags: "vôlei central ouro"
	},
	{
		titulo: "Rafaela Silva",
		esporte: "Judô",
		modalidade: "Leve",
		medalhas: ["Ouro - Rio 2016"],
		descricao: "A judoca Rafaela Silva conquistou o coração dos brasileiros ao conquistar o ouro olímpico no Rio de Janeiro.",
		link: "https://pt.wikipedia.org/wiki/Rafaela_Silva",
		tags: "judô ouro inspiração"
	},
	{
		titulo: "Mayra Aguiar",
		esporte: "Judô",
		modalidade: "Meio-Pesado",
		medalhas: ["Bronze - Londres 2012", "Bronze - Rio 2016"],
		descricao: "Uma das maiores judocas da história do Brasil, Mayra Aguiar conquistou diversas medalhas em competições internacionais.",
		link: "https://pt.wikipedia.org/wiki/Mayra_Aguiar",
		tags: "judô bronze"
	},
	{
		titulo: "Robert Scheidt",
		esporte: "Vela",
		modalidade: "Laser",
		medalhas: ["Ouro - Atlanta 1996", "Ouro - Sydney 2000"],
		descricao: "O velejador Robert Scheidt é um dos maiores medalhistas olímpicos brasileiros de todos os tempos.",
		link: "https://pt.wikipedia.org/wiki/Robert_Scheidt",
		tags: "vela laser bicampeão olímpico"
	},
	{
		titulo: "Torben Grael",
		esporte: "Vela",
		modalidade: "Star",
		medalhas: ["Ouro - Atlanta 1996"],
		descricao: "O velejador Torben Grael é um dos maiores nomes da vela brasileira, com diversas conquistas em competições internacionais.",
		link: "https://pt.wikipedia.org/wiki/Torben_Grael",
		tags: "vela star ouro"
	},
	{
		titulo: "Adhemar Ferreira da Silva",
		esporte: "Atletismo",
		modalidade: "Salto Triplo",
		medalhas: ["Ouro - Helsinque 1952", "Ouro - Melbourne 1956"],
		descricao: "O primeiro brasileiro a conquistar duas medalhas de ouro olímpicas em esportes individuais, Adhemar Ferreira da Silva é uma lenda do atletismo brasileiro.",
		link: "https://pt.wikipedia.org/wiki/Adhemar_Ferreira_da_Silva",
		tags: "atletismo salto triplo bicampeão olímpico"
	},
	{
		titulo: "Joaquim Cruz",
		esporte: "Atletismo",
		modalidade: "800 metros",
		medalhas: ["Prata - Los Angeles 1984"],
		descricao: "O meio-fundista Joaquim Cruz é um dos maiores nomes do atletismo brasileiro.",
		link: "https://pt.wikipedia.org/wiki/Joaquim_Cruz",
		tags: "atletismo 800 metros prata"
	},
	{
		titulo: "Hortência Marcari",
		esporte: "Basquetebol",
		modalidade: "Basquetebol",
		descricao: "Considerada uma das maiores jogadoras de basquete de todos os tempos, Hortência Marcari foi fundamental para a popularização do basquete feminino no Brasil.",
		link: "https://pt.wikipedia.org/wiki/Hort%C3%AAncia_Marcari",
		tags: "basquetebol lenda pioneira"
	},
	{
        titulo: "Ana Sátila",
        esporte: "Canoagem",
        modalidade: "Slalom",
        medalhas: ["Bronze - Tóquio 2020"],
        descricao: "A canoísta Ana Sátila conquistou a primeira medalha olímpica da história do Brasil na canoagem slalom, em Tóquio 2020.",
        link: "https://pt.wikipedia.org/wiki/Ana_Sátila",
        tags: "canoagem, slalom, bronze"
    },
    {
        titulo: "Martine Grael e Kahena Kunze",
        esporte: "Vela",
        modalidade: "49er FX",
        medalhas: ["Ouro - Tóquio 2020"],
        descricao: "A dupla Martine Grael e Kahena Kunze conquistou a primeira medalha de ouro olímpica para o Brasil na vela, em Tóquio 2020.",
        link: "https://pt.wikipedia.org/wiki/Martine_Grael", // Link para a página da Martine Grael
        tags: "vela, 49erFX, ouro"
    },
	{
        titulo: "Thiago Pereira",
        esporte: "Natação",
        modalidade: "Medley",
        medalhas: ["Bronze - Pequim 2008", "Bronze - Londres 2012"],
        descricao: "Conhecido como Mr. Medley, Thiago Pereira é um dos maiores nadadores brasileiros de todos os tempos.",
        link: "https://pt.wikipedia.org/wiki/Thiago_Pereira",
        tags: "natação, medley, versátil"
    },
    {
        titulo: "Nicholas Santos",
        esporte: "Natação",
        modalidade: "Nado Borboleta",
        medalhas: ["Prata - Londres 2012"],
        descricao: "Especialista em nado borboleta, Nicholas Santos é um dos principais nomes da natação brasileira.",
        link: "https://pt.wikipedia.org/wiki/Nicholas_Santos",
        tags: "natação, borboleta, velocidade"
    },
    {
        titulo: "Darlan Romani",
        esporte: "Atletismo",
        modalidade: "Arremesso de Peso",
        medalhas: ["Bronze - Tóquio 2020"],
        descricao: "Darlan Romani é um dos maiores nomes do arremesso de peso brasileiro, com diversas medalhas em competições internacionais.",
        link: "https://pt.wikipedia.org/wiki/Darlan_Romani",
        tags: "atletismo, arremesso de peso, força"
    },
    {
        titulo: "Alison dos Santos",
        esporte: "Atletismo",
        modalidade: "400 metros com barreiras",
        medalhas: ["Bronze - Tóquio 2020"],
        descricao: "Alison dos Santos, conhecido como Piu, é uma das maiores promessas do atletismo brasileiro.",
        link: "https://pt.wikipedia.org/wiki/Alison_dos_Santos",
        tags: "atletismo, 400 metros com barreiras, velocidade"
    },
    {
        titulo: "Daniele Hypólito",
        esporte: "Ginástica",
        modalidade: "Ginástica Artística",
        medalhas: ["Bronze - Pequim 2008"],
        descricao: "Uma das maiores ginastas brasileiras de todos os tempos, Daniele Hypólito conquistou diversas medalhas em competições internacionais.",
        link: "https://pt.wikipedia.org/wiki/Daniele_Hypólito",
        tags: "ginástica, artística, piso"
    },
    {
        titulo: "Fernanda Venturini",
        esporte: "Vôlei",
        modalidade: "Vôlei",
        medalhas: ["Bronze - Atlanta 1996", "Prata - Sydney 2000"],
        descricao: "Levantadora, Fernanda Venturini foi uma das principais jogadoras da seleção brasileira de vôlei feminino.",
        link: "https://pt.wikipedia.org/wiki/Fernanda_Venturini",
        tags: "vôlei, levantadora, liderança"
    },
    {
        titulo: "Iziane Castro Marques",
        esporte: "Basquetebol",
        modalidade: "Basquetebol",
        descricao: "Considerada uma das maiores jogadoras de basquete do Brasil, Iziane Castro Marques representou o país em diversas competições internacionais.",
        link: "https://pt.wikipedia.org/wiki/Iziane_Castro_Marques",
        tags: "basquetebol, ala, armadora"
    },
    {
        titulo: "Gustavo Kuerten",
        esporte: "Tênis",
        modalidade: "Tênis",
        medalhas: ["Bronze - Atenas 2004"],
        descricao: "Guga Kuerten foi um dos maiores tenistas brasileiros de todos os tempos, conquistando três títulos de Grand Slam.",
        link: "https://pt.wikipedia.org/wiki/Gustavo_Kuerten",
        tags: "tênis, guga, grand slam"
    }
];
