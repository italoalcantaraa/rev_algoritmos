export class DBMemory {
  #videos = new Map()

  create(video) {
    this.videos.push(video)
  }
}