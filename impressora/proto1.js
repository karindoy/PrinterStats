class impressora
{
    constructor(nome, local, ip )
    {
        this.nome=nome;
        this.local=local;
        this.ip=ip;
    }
}

imp189 ()
{
    var adm = new impressora;
    nome = "Lexmark MS811";
    local= "administração";
    ip = "192.168.0.189";
    console.log(adm.nome);
}

console.log(adm);


