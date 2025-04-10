CREATE DATABASE AutoAtendimento;

use AutoAtendimento;

CREATE TABLE tblCondicional (
    -- CondicionalID INTEGER(11) NOT NULL,
    CondicionalID INTEGER NOT NULL AUTO_INCREMENT,
    ProdutoID     INTEGER(11) NOT NULL,
    Descricao     VARCHAR(50) NOT NULL,
    QtdMinima     INTEGER(11) NOT NULL,
    QtdMaxima     INTEGER(11) NOT NULL,
    Obrigatorio   TINYINT(4)  NOT NULL DEFAULT 1,
    PRIMARY KEY (CondicionalID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO tblCondicional (ProdutoID, Descricao, QtdMinima, QtdMaxima, Obrigatorio) VALUES(5, "ARROZ", 1, 2, 1);
INSERT INTO tblCondicional (ProdutoID, Descricao, QtdMinima, QtdMaxima, Obrigatorio) VALUES(5, "ARROZ", 1, 1, 1);




CREATE TABLE tblConfigDelivery (
    ConfigDeliveryID        INTEGER NOT NULL AUTO_INCREMENT,
    NomeFantasia            VARCHAR(50) NOT NULL,
    AliasLojaVirtual        VARCHAR(50) NOT NULL,
    FormaTaxaEntrega        VARCHAR(50) NOT NULL,
    TempoEntrega            INTEGER(11) NOT NULL,
    TempoRetirada           INTEGER(11) NOT NULL,
    ValorMinCompra          VARCHAR(50) NOT NULL,
    BaseCalculoValorPizza   VARCHAR(50) NOT NULL,
    FecharaLoja             VARCHAR(50) NOT NULL,
    TextoParaLojaAberta     VARCHAR(50) NOT NULL,
    TextoParaLojaFechada    VARCHAR(50) NOT NULL,
    TamanhoDasImagens       VARCHAR(50) NOT NULL,
    ImpressaoPedido         VARCHAR(50) NOT NULL,
    NotificarWhatsapp       VARCHAR(50) NOT NULL,
    CaminhoLogoTipoDelivery VARCHAR(50) NOT NULL,
    CaminhoImagemDeFundo    VARCHAR(50) NOT NULL,
    Entrega                 VARCHAR(5) NOT NULL,
    Retirada                VARCHAR(5) NOT NULL,
    EstouAqui               VARCHAR(5) NOT NULL,
    PRIMARY KEY (ConfigDeliveryID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO tblConfigDelivery (NomeFantasia, AliasLojaVirtual, FormaTaxaEntrega, TempoEntrega, TempoRetirada, ValorMinCompra, BaseCalculoValorPizza, FecharaLoja, TextoParaLojaAberta, TextoParaLojaFechada, TamanhoDasImagens, ImpressaoPedido, NotificarWhatsapp, CaminhoLogoTipoDelivery, CaminhoImagemDeFundo, Entrega, Retirada, EstouAqui) 
VALUES("Restaurante Sabor e Arte", "restaurantesaborearte", "BAIRROS", 30, 30, "0,00", "Valor Medio", "True", "Faça seu pedido", "Loja Fechada", "240 x 240", "IMPRESSÃO 80mm", "True", "", "", "True", "True", "False");





CREATE TABLE tblGrupo (
    GrupoID INTEGER     NOT NULL AUTO_INCREMENT,
    Grupo   VARCHAR(40) NOT NULL,
    PRIMARY KEY (GrupoID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO tblGrupo (Grupo) VALUES("SUCO NATURAL");
INSERT INTO tblGrupo (Grupo) VALUES("SUCO POLPA");
INSERT INTO tblGrupo (Grupo) VALUES("REFRIGERANTES");
INSERT INTO tblGrupo (Grupo) VALUES("CERVEJAS");
INSERT INTO tblGrupo (Grupo) VALUES("PRATOS");





CREATE TABLE tblIngredientes (
    IngredienteID INTEGER      NOT NULL AUTO_INCREMENT,
    Descricao     VARCHAR(100) NOT NULL,
    Valor         VARCHAR(10)  NOT NULL DEFAULT '0,00',
    ProdutoID     INTEGER(11)  NOT NULL,
    Ativo         TINYINT(1)   NOT NULL DEFAULT 1,
    PRIMARY KEY (IngredienteID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO tblIngredientes (Descricao, valor, ProdutoID, Ativo) VALUES("Salada", '0.00', 5, 1);
INSERT INTO tblIngredientes (Descricao, valor, ProdutoID, Ativo) VALUES("Feijao", '0,00', 5, 1);





CREATE TABLE tblProdutos (
    ProdutoID  INTEGER      NOT NULL AUTO_INCREMENT,
    Codigo     VARCHAR(13)  NOT NULL,
    Descricao  VARCHAR(50)  NOT NULL,
    Unidade    VARCHAR(2)   NOT NULL,
    Preco      VARCHAR(10)  NOT NULL,
    Estoque    VARCHAR(10)  NOT NULL,
    Ncm        VARCHAR(8)   NOT NULL,
    Cst        VARCHAR(10)  NOT NULL,
    Aliquota   VARCHAR(2)   NOT NULL,
    GrupoID    INTEGER(11)  NOT NULL,
    Grupo      VARCHAR(40)  NOT NULL,
    Ativo      TINYINT(1)   NOT NULL DEFAULT 1,
    Observacao VARCHAR(200) NOT NULL,
    Imagem     VARCHAR(50)  NOT NULL,
    PRIMARY KEY (ProdutoID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO tblProdutos (Codigo, Descricao, Unidade, Preco, Estoque, Ncm, Cst, Aliquota, GrupoID, Grupo, Ativo, Observacao, Imagem) VALUES("0000000000123", "MARMITA PEQUENA", "UN", "21.50", "100", "19059090", "123456789", "07", 1, "PRATOS", 1, "Arroz, Feijão, 1 Mistura, 2 Guarnição, Salada Opcional(R$ 2,00). ", "marmitaa.jpg");
INSERT INTO tblProdutos (Codigo, Descricao, Unidade, Preco, Estoque, Ncm, Cst, Aliquota, GrupoID, Grupo, Ativo, Observacao, Imagem) VALUES("0000000009998", "MARMITA MEDIA", "UN", "25.00", "10", "19059090", "1234", "18", 1, "PRATOS", 1, "Arroz, Feijao, 2 Misturas, 1 Guarnição, 1 Salada OU 2 Guarnição Sem Salada.", "marmitaa.jpg");
INSERT INTO tblProdutos (Codigo, Descricao, Unidade, Preco, Estoque, Ncm, Cst, Aliquota, GrupoID, Grupo, Ativo, Observacao, Imagem) VALUES("0000000000031", "MARMITA GRANDE", "UN", "28.00", "100", "19059090", "123456", "18", 1, "PRATOS", 1, "Arroz, Feijao, 2 Misturas , 1 Guarnição, 1 Salada ou 2 Guarnição sem Salada", "marmitaa.jpg");
INSERT INTO tblProdutos (Codigo, Descricao, Unidade, Preco, Estoque, Ncm, Cst, Aliquota, GrupoID, Grupo, Ativo, Observacao, Imagem) VALUES("0000000000017", "FEIJOADA MEDIA", "UN", "35.00", "100", "19059090", "123456", "18", 1, "PRATOS", 1, "FEIJOADA MEDIA", "feijoada.jpg");
INSERT INTO tblProdutos (Codigo, Descricao, Unidade, Preco, Estoque, Ncm, Cst, Aliquota, GrupoID, Grupo, Ativo, Observacao, Imagem) VALUES("0000000000024", "FEIJOADA GRANDE", "UN", "39.00", "100", "19059090", "123456", "18", 1, "PRATOS", 1, "FEIJOADA GRANDE", "feijoada.jpg");
INSERT INTO tblProdutos (Codigo, Descricao, Unidade, Preco, Estoque, Ncm, Cst, Aliquota, GrupoID, Grupo, Ativo, Observacao, Imagem) VALUES("0000000000048", "Coca Cola Lata 350ml Zero", "UN", "8.50", "100", "19059090", "123456", "18", 4, "REFRIERANTES", 1, "COCA COLA", "cocacola350mlzero.jpg");
INSERT INTO tblProdutos (Codigo, Descricao, Unidade, Preco, Estoque, Ncm, Cst, Aliquota, GrupoID, Grupo, Ativo, Observacao, Imagem) VALUES("0000000000051", "SUCO DE LARANJA", "UN", "8.50", "100", "19059090", "123456", "18", 2, "", 1, "Suco de Laranja Natural", "sucodelaranja.jpg");
INSERT INTO tblProdutos (Codigo, Descricao, Unidade, Preco, Estoque, Ncm, Cst, Aliquota, GrupoID, Grupo, Ativo, Observacao, Imagem) VALUES("0000000000040", "Heineken Lata 350 ml", "UN", "7.50", "100", "19059090", "123456", "18", 5, "", 1, "Digite os detalhes do produto", "heinekenLata350ml.jpg");
INSERT INTO tblProdutos (Codigo, Descricao, Unidade, Preco, Estoque, Ncm, Cst, Aliquota, GrupoID, Grupo, Ativo, Observacao, Imagem) VALUES("0000000000019", "Coca Cola Lata 220 ml", "UN", "3.50", "100", "Digite o", "Digite o C", "Di", 4, "", 1, "Digite os detalhes do produto", "COCACOLALATA200ML.jpg");





CREATE TABLE tblTurno (
    TurnoID   INTEGER     NOT NULL AUTO_INCREMENT,
    Descricao VARCHAR(50) NOT NULL,
    Segunda   VARCHAR(10) NOT NULL,
    Terca     VARCHAR(10) NOT NULL,
    Quarta    VARCHAR(10) NOT NULL,
    Quinta    VARCHAR(10) NOT NULL,
    Sexta     VARCHAR(10) NOT NULL,
    Sabado    VARCHAR(10) NOT NULL,
    Domingo   VARCHAR(10) NOT NULL,
    PRIMARY KEY (TurnoID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO tblTurno (Descricao, Segunda, Terca, Quarta, Quinta, Sexta, Sabado, Domingo) VALUES("horario", "11:0015:00", "11:0015:00", "11:0015:00", "11:0015:00", "11:0015:00", "11:0015:00", "11:0015:00");




