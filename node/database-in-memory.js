import { randomUUID } from "node:crypto"

export class DBMemory {
  #videos = new Map()

  create(video) {
    const id = randomUUID();
    
    this.videos.set(id, video)
  }
}