export enum Situacao {
    CURSANDO = 'Cursando', APROVADO = 'Aprovado(a)',
    AVFINAL  = 'Avaliação final', REPROVADO = 'Reprovado(a)'
}
export class Boletim {
    private bim1: number | undefined
    private bim2: number | undefined
    private bim3: number | undefined
    private bim4: number | undefined
    private mediaParcial: number | undefined
    private mediaFinal: number | undefined
    private situacao: Situacao

    constructor(b1: number |undefined = undefined, 
                b2: number |undefined = undefined,
                b3: number |undefined = undefined,
                b4: number |undefined = undefined) {
        this.bim1 = b1
        this.bim2 = b2
        this.bim3 = b3
        this.bim4 = b4
        this.mediaParcial = undefined
        this.mediaFinal = undefined
        this.situacao = Situacao.CURSANDO
    }

    alterarBim1(nota: number): boolean {
        if (nota >= 0 && nota <= 100) {
            this.bim1 = nota
            return true
        }
        return false
    }

    obterBim1() {
        return this.bim1
    }

    alterarBim2(nota: number) {
        if (nota >= 0 && nota <= 100) {
            this.bim2 = nota
            return true
        }
        return false
    }

    obterBim2() {
        return this.bim2
    }

    alterarBim3(nota: number) {
        if (nota >= 0 && nota <= 100) {
            this.bim3 = nota
            return true
        }
        return false
    }

    obterBim3() {
        return this.bim3
    }

    alterarBim4(nota: number) {
        if (nota >= 0 && nota <= 100) {
            this.bim4 = nota
            return true
        }
        return false
    }

    obterBim4() {
        return this.bim4
    }

    calcularMediaParcial(b1: number, b2: number, 
                         b3: number, b4: number): number | undefined {
      this.alterarBim1(b1)
      this.alterarBim2(b2)
      this.alterarBim3(b3)
      this.alterarBim4(b4)

      if (this.bim1 && this.bim2 && this.bim3 && this.bim4) {
        this.mediaParcial = 
             (this.bim1 * 2 + this.bim2 * 2 + this.bim3 * 3 + this.bim4 * 3) / 10
        this.alterarSituacao(this.mediaParcial)
      }
      return this.mediaParcial
    }

    alterarSituacao(mp: number) {
        if (mp >= 60) {
          this.situacao = Situacao.APROVADO
        } else if (mp >= 10) {
          this.situacao = Situacao.AVFINAL 
        } else {
          this.situacao = Situacao.REPROVADO
        }
    } 

    obterSituacao(): Situacao {
        return this.situacao
    }

}