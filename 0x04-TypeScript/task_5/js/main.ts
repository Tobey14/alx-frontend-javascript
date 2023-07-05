interface MajorCredits{
  credits: number,
  brand: any,
}


interface MinorCredits{
  credits: number,
  brand: any,
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits["credits"]{
  return subject1.credits + subject2.credits;
}


export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits["credits"]{
  return subject1.credits + subject2.credits;
}