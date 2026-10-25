


class MediaItem {
    constructor(title, year, genre) {
        this.title = title
        this.year = year
        this.genre = genre
    }

    getSummary() {
        return `title: ${this.title} \nyear: ${this.year}\ngenre: ${this.genre}`
    }
}

class Book extends MediaItem {
    constructor(author, pageCount, title, year, genre) {
        super(title, year, genre)
        this.author = author
        this.pageCount = pageCount
    }

    getSummary() {
        return `Book: ${this.title} by ${this.author}, ${this.pageCount} pages`
    }
}

class Movie extends MediaItem {
    constructor(director, durationMinutes, title, year, genre) {
        super(title, year, genre)
        this.director = director
        this.durationMinutes = durationMinutes
    }
    getSummary() {
        return `Movie: '${this.title}' directed by ${this.director}, ${this.durationMinutes}min`
    }
}

class Library {

    constructor(list) {
        this.list = list
    }
    addItem(item) {
        this.list.push(item)
    }

    search(term) {
        return this.list.filter(function (item) {
            return item.title.toLowerCase().includes(term.toLowerCase())
        })
    }
    listByGenre(genre){
        return this.list.filter(function(item) {
            return  item.genre.toLowerCase()===genre.toLowerCase()
        })
    }

}