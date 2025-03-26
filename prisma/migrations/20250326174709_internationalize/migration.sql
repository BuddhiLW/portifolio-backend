-- CreateTable
CREATE TABLE "projeto_translations" (
    "id" SERIAL NOT NULL,
    "projetoId" INTEGER NOT NULL,
    "locale" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "projeto_translations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnologia_translations" (
    "id" SERIAL NOT NULL,
    "tecnologiaId" INTEGER NOT NULL,
    "locale" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "tecnologia_translations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "projeto_translations_projetoId_locale_key" ON "projeto_translations"("projetoId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "tecnologia_translations_tecnologiaId_locale_key" ON "tecnologia_translations"("tecnologiaId", "locale");

-- AddForeignKey
ALTER TABLE "projeto_translations" ADD CONSTRAINT "projeto_translations_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "projetos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnologia_translations" ADD CONSTRAINT "tecnologia_translations_tecnologiaId_fkey" FOREIGN KEY ("tecnologiaId") REFERENCES "tecnologias"("id") ON DELETE CASCADE ON UPDATE CASCADE;
