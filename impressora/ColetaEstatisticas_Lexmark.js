//LexMark

//monocromática

//lista de impressora monocromática se for

//"Lexmark", "MS811 dn"
//"Lexmark", "MX511 dn"
//"Lexmark", "MS317"
//"Lexmark", "T654 dn"
//"Lexmark", "T630"
//colocar o nome do toner


getTotalPag ()
//caminho: Contagem lados de mídia>Lados mon. reco.>total
{
    /html/body/table[5]/tbody/tr[8]/td[2]/p
}

//caminho: Contagem lados de mídia>Lados monocromáticos impressos
getLados()
{
    /html/body/table[5]/tbody/tr[20]/td[2]/p
}

//caminho: Info de suprimentos>Cartucho Preto
getPretoInstallDate()
{
    /html/body/table[8]/tbody/tr[3]/td[2]/p
}

//colorida
//"Lexmark", "CS510 de".