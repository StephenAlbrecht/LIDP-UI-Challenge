package lidpapi;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(maxAge = 3600)
@RestController
public class AppInfoController {
    @Value("${spring.application.name}")
    private String name;

    @CrossOrigin("http://localhost:4200") // TODO: Make global
    @RequestMapping(path="/appInfo", method=RequestMethod.GET)
    public HttpEntity<AppInfo> appInfo() {
        AppInfo appInfo = new AppInfo(name);
        appInfo.add(linkTo(methodOn(AppInfoController.class).appInfo()).withSelfRel());

        return new ResponseEntity<>(appInfo, HttpStatus.OK);
    }
}
