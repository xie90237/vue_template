declare global {
  interface ServiceType {
    user: {
      LoginApi: {
        address: string
        avatarUrl: string
        email: string
        id: string
      }
    }
  }
}

export { }
