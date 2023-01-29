// User Model
interface UserAttributes {
  id?: number | string
  name: string
  email: string
  password: string
  phoneNumber: string
  isAdmin?: boolean
}

// Warehouse Model
interface WarehouseAttributes {
  id?: number | string
  title: string
  description: string
  size: number
  rent: number
  governorate: string
  location: string
  street: string
  services: Array<string>
  images: Array<string>
  UserId?: number | string
}

export { UserAttributes, WarehouseAttributes }
