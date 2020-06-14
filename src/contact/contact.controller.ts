import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './interfaces/create-contact-dto';
import { Contact } from './interfaces/contact.interface';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  async getContacts(): Promise<any[]> {
    return this.contactService.getContacts();
  }

  @Get(':id')
  async getContact(@Param('id') id: string): Promise<Contact> {
    return this.contactService.getContact(id);
  }

  @Post()
  async create(@Body() contact: CreateContactDto): Promise<Contact> {
    return this.contactService.saveContact(contact);
  }

  @Put(':id')
  async editContact(
    @Param('id') id: string,
    @Body() contact: CreateContactDto,
  ): Promise<Contact> {
    return this.contactService.editContact(id, contact);
  }

  @Delete(':id')
  async deleteContact(@Param('id') id: string): Promise<boolean> {
    return this.contactService.deleteContact(id);
  }
}
