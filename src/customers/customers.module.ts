import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerRepository } from './customers.repository';
import { Customer } from './entities/customer.entity';
import { SMSPhonebook } from './entities/sms-phonebook.entity';
import { Subscription } from './entities/subscriber.entity';
import { NPWPCustomer } from './entities/customer-npwp.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Customer,
      Subscription,
      SMSPhonebook,
      NPWPCustomer,
    ]),
  ],
  controllers: [CustomersController],
  exports: [CustomersService],
  providers: [CustomersService, CustomerRepository],
})
export class CustomersModule {}
