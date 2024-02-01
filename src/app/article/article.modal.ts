export class Article {
    title: string;
    votes: number;
    link: string;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    // Law of Demeter;

    voteUp() {
        this.votes++;
    }


    voteDown() {
        this.votes--;
    }


    domain(): string {
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null as unknown as string; // Explicitly specifying null as string
        }

    }

}


