import { Controller, Get } from '@nestjs/common'
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getData() {
    return this.productsService.getPokemonList()
  }
}
