import { Injectable } from '@nestjs/common'
import { HttpService } from 'nestjs-http-promise'

@Injectable()
export class ProductsService {
  constructor(private readonly httpClient: HttpService) {}

  async getPokemonList(): Promise<object> {
    const { data } = await this.httpClient.get('https://pokeapi.co/api/v2/pokemon')
    return data.results
  }
}
