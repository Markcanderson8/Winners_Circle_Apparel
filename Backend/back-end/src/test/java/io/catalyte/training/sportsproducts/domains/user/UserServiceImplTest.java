package io.catalyte.training.sportsproducts.domains.user;


import static io.catalyte.training.sportsproducts.constants.StringConstants.GOOGLE_CLIENT_ID;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotSame;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.contains;
import static org.mockito.Mockito.when;

import io.catalyte.training.sportsproducts.data.ProductFactory;
import io.catalyte.training.sportsproducts.domains.user.UserServiceImpl;
import io.catalyte.training.sportsproducts.exceptions.ResourceNotFound;
import java.util.Optional;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.web.client.HttpServerErrorException.ServiceUnavailable;

@RunWith(MockitoJUnitRunner.Silent.class)
@WebMvcTest(UserServiceImpl.class)
public class UserServiceImplTest {

  @InjectMocks
  private UserServiceImpl userServiceImpl;

  @Rule
  public ExpectedException thrown = ExpectedException.none();

  @Mock
  private UserRepository userRepository;

  User userOne;

  @BeforeEach
  public void setUp() {

    MockitoAnnotations.initMocks(this);
    when(userRepository.save(any(User.class))).thenReturn(userOne);
  }

  @Test
  public void updateUser() {

  }

  @Test
  public void createUser() {
    userOne = new User("mark", "anderson", "mark@gmail.com", "125 n main st.", "apt 3", "easley", "sc", 29642, "864-637-9485" );
    User result = userServiceImpl.createUser(userOne);
    assertEquals(result, userOne);
  }

  @Test
  public void getUserByEmail() {
  }
}