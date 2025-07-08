export class Boletim {
    bim1: number;
    bim2: number;
    bim3: number;
    bim4: number;

    constructor(b1: number = 0, b2: number = 0, b3: number = 0, b4: number = 0) {
        this.bim1 = b1;
        this.bim2 = b2;
        this.bim3 = b3;
        this.bim4 = b4;
    }

    alterarBim1(b1: number) {
        this.bim1 = b1;
    }

    alterarBim2(b2: number) {
        this.bim2 = b2;
    }

    alterarBim3(b3: number) {
        this.bim3 = b3;
    }

    alterarBim4(b4: number) {
        this.bim4 = b4;
    }
}

export function calcularMediaParcial(b1: number, b2: number, b3: number, b4: number): number {
    return (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10;
}

export function alterarsituacao(mp: number | undefined): string {
  if (mp === undefined) {
    return 'Indefinida';
  } else if (mp >= 60) {
    return 'Aprovado';
  } else if (mp >= 10) {
    return 'Avaliação Final';
  } else {
    return 'Reprovado';
  }
}

