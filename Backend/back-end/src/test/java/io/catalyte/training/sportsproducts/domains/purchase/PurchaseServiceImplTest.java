package io.catalyte.training.sportsproducts.domains.purchase;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyCollection;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

import io.catalyte.training.sportsproducts.data.ProductFactory;
import io.catalyte.training.sportsproducts.exceptions.ResourceNotFound;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.data.domain.Example;

@RunWith(MockitoJUnitRunner.Silent.class)
@WebMvcTest(PurchaseServiceImpl.class)
public class PurchaseServiceImplTest {

  @InjectMocks
  private PurchaseServiceImpl purchaseServiceImpl;

  @Rule
  public ExpectedException thrown = ExpectedException.none();

  @Mock
  private PurchaseRepository purchaseRepository;

  Purchase purchase;
  List<Purchase> purchases = new ArrayList<>();

  @BeforeEach
  public void setUp() {
    MockitoAnnotations.initMocks(this);





    when(purchaseRepository.save(any(Purchase.class))).thenReturn(purchases.get(0));
    //when(purchaseRepository.findByBillingAddressEmail(any(String.class)));
  }

  @Test
  public void savePurchase() {
    purchase = new Purchase();
    DeliveryAddress deliveryAddress = new DeliveryAddress("mark", "anderson", "132 main st.", null, "easley", "sc", 29642);
    BillingAddress billingAddress = new BillingAddress("125 main st.", null, "easley", "sc", 29642, "test@gmail.com", "864-555-1245" );
    CreditCard creditCard = new CreditCard("1112123100001245", "011", "12/24", "mark anderson");
    purchase.setDeliveryAddress(deliveryAddress);
    purchase.setBillingAddress(billingAddress);
    purchase.setCreditCard(creditCard);
    Purchase result = purchaseServiceImpl.savePurchase(purchase);
    assertEquals(result, purchase);
  }


  @Test
  public void findAllPurchasesWithoutEmailThrowsNotFound(){
    assertThrows(
            ResourceNotFound.class,
            () -> purchaseServiceImpl.findAllPurchases(),
            "404: Not Found"
    );
  }
 

}

